
# MoringaPair

<p>A system that randomly pairs up students, keeps track of each pair, and changes weekly.
</p>

Problem statement: 

Pairing students and keeping track of each pair is cumbersome and laborious. At the moment, the Technical mentor has to manually pair students based on his intuition and other factors like student performance. The Technical mentor keeps track of these pairs ensuring that there are no duplications unless necessary.

Solution: 

A system that randomly pairs up students, keeps track of each pair, and changes weekly.



## Authors

- [@alexander784](https://github.com/alexander784)
- [@burhan9520](https://github.com/burhan9520)
- [@Johnronnie254](https://github.com/Johnronnie254)
- [@githinjisamson1](https://www.github.com/githinjisamson1)


## Contributing

Contributions are always welcome!




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET_KEY`
`SQLALCHEMY_DATABASE_URI`
`SQLALCHEMY_TRACK_MODIFICATIONS`
`SQLALCHEMY_ECHO`
`JWT_SECRET_KEY`
`MAIL_SERVER`
`MAIL_USERNAME`
`MAIL_PASSWORD`
## Features

- Login
- Create an account
- The random pairing of students. 
- Does this without any sort of metrics but ensures that there’s no duplication of pairs i.e. keep track of each pair per week
- Data visualization and filters of the pairs spread over the weeks such that I can filter out and know on this week, who was paired with who
- TMs can see the history of pairings


## Feedback

If you have any feedback, please reach out to us at githinjisamson148@gmail.com


## Run Locally

Install MoringaPair:

```bash
clone this repository
cd server
pipenv install && pipenv shell
export FLASK_APP=app.py
export FLASK_RUN_PORT=5555
export FLASK_DEBUG=1
flask db init
flask db upgrade head
flask run

navigate to the root directory
cd client
npm install
npm start

```
    
## Lessons Learned

- Core Components of Python Web Applications
- Application Programming Interfaces (APIs)
- Retrieving Data from APIs
- Building APIs with Flask
- Representative State Transfer (REST)
- Forms and Validations
- Client-Server Communication
- Serialization
- Full-stack development with Flask and React
- Responsive Web Design
- Deployment


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Hooks applied

- useState: simple state management
- useEffect: side effects
- useCallback: optimization
- useReducer: complex state management
- useNavigate: navigation
- useContext: context API/avoid unnecessary prop drilling

## Support

For support, email githinjisamson148@gmail.com.


## Tech Stack

**Client:** ```HTML | CSS | JS | REACT```

**Server:** ```Python | Flask```

**Database:** ```Postgres```

**Version Control:** ```Git```

**Package Management:** ```npm```

**Deployment:** ```Vercel, Render```


## Used By

Moringa School Final Phase Project :)

## Running Tests

To run frontend tests, run the following command

```bash
  npm test
```


## API Reference

https://documenter.getpostman.com/view/23804775/2sA2rFTLQ5


## Live
The site is live at:

https://moringa-pair-beta.vercel.app/


## Server Tree

```
server
├── ERD.jpg
├── Pipfile
├── Pipfile.lock
├── app.py
├── config.py
├── controllers
│   ├── __init__.py
│   ├── auth_controllers.py
│   ├── pair_controllers.py
│   ├── student_controllers.py
│   └── user_controllers.py
├── marshmallow_schemas.py
├── migrations
│   ├── README
│   ├── alembic.ini
│   ├── env.py
│   ├── script.py.mako
│   └── versions
│       └── dab2bff76e1f_create_tables_users_students_pairs.py
├── models.py
├── requirements.txt
└── seed.py
```


## Client src folder

```
client/src
├── App.jsx
├── __tests__
│   ├── Home.test.jsx
│   └── NavBar.test.jsx
├── assets
│   ├── banner.jpg
│   └── studentsImage.jpg
├── components
│   ├── AddNewStudentModal.jsx
│   ├── DeleteStudentModal.jsx
│   ├── Footer.jsx
│   ├── LinearProgress.jsx
│   ├── NavBar.jsx
│   ├── OffCanvas.jsx
│   ├── Pair.jsx
│   ├── Profile.jsx
│   ├── Toast.jsx
│   ├── UpdateStudentModal.jsx
│   └── UpdateUserModal.jsx
├── context
│   ├── authContext.js
│   ├── pairsContext.js
│   └── studentsContext.js
├── index.jsx
├── pages
│   ├── Error.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── MyAccount.jsx
│   ├── Pairs.jsx
│   ├── SignUp.jsx
│   └── StudentsDataGrid.jsx
└── styles.css
```
