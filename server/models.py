from config import db, bcrypt
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin


# models
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False, unique=True)
    _password_hash = db.Column(db.String, nullable=False)

    # password hashing
    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        # utf-8 encoding and decoding is required in python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    # validations

    @validates("full_name")
    def validate_full_name(self, key, full_name):
        if not full_name:
            raise ValueError("Full name required")
        return full_name

    @validates("username")
    def validate_username(self, key, username):
        if not username:
            raise ValueError("Username required")
        else:
            # username must be unique
            if User.query.filter_by(username=username).first():
                raise ValueError("Username already exists")

            return username

    # john.doe@moringaschool.com => regex
    @validates("email")
    def validate_email(self, key, email):
        if not email:
            raise ValueError("Email required")
        else:
            # email must be unique
            if User.query.filter_by(email=email).first():
                raise ValueError("Email already exists")
            else:
                import re
                pattern = r"[a-z]*.[a-z]*@moringaschool.com"
                regex = re.compile(pattern)

                # check for fullmatch
                if not regex.fullmatch(email):
                    raise ValueError("Invalid email format")

                return email

    @validates("_password_hash")
    def validate_password_hash(self, key, _password_hash):
        if not _password_hash:
            raise ValueError("Password required")
        return _password_hash

    def __repr__(self):
        return f"User {self.full_name} {self.username} {self.email}"


class Student(db.Model):
    __tablename__ = "students"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)

    # 1:M
    grouping = db.relationship("Grouping", backref="student")

    # M:M
    groups = db.relationship("Grouping", back_populates="students")

    def __repr__(self):
        return f"Student {self.name} {self.email}"


# Association table => links Student and Group
class Grouping(db.Model):
    __tablename__ = "groupings"

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("students.id"))
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))

    students = db.relationship("Student", back_populates="groups")
    groups = db.relationship("Group", back_populates="students")

    def __repr__(self):
        return f"Grouping {self.student_id} {self.group_id}"


class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    week_number = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    # 1:M
    grouping = db.relationship("Grouping", backref="group")

    # M:M
    students = db.relationship("Grouping", back_populates="groups")

    def __repr__(self):
        return f"Group {self.name} {self.week_number}"
