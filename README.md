### README.md

## Introduction

This is a simple project for login system. 

## Prerequisites

- Python 3.6+
- Node.js and npm
- Django 3.x+
- Django REST framework
- Virtual environment (venv or virtualenv)

## Setup Instructions

### 1. Activate Virtual Environment

First, you need to activate the virtual environment where all Python dependencies are installed. If you haven't created one, create it using the following command:

```bash
python3 -m venv .venv
```

Activate the virtual environment:

- On macOS and Linux:

  ```bash
  source .venv/bin/activate
  ```

- On Windows:

  ```bash
  .venv\Scripts\activate
  ```

### 2. Install Dependencies

Once the virtual environment is activated, install the required Python packages:

```bash
pip install -r requirements.txt
```

### 3. Build React Static Files

Navigate to the React frontend directory and install the npm dependencies:

```bash
cd myfrontend
npm install
```

Build the static files:

```bash
npm run build
```

This will create a `build` directory containing the static files that will be served by Django.

### 4. Run the Server

Go back to the root directory of the project and run the Django server:

```bash
cd ..
python manage.py runserver
```

The server should now be running at `http://localhost:8000/`.

### 5. Run Tests

To run the tests, use `pytest`. Ensure you are in the root directory of the project where `pytest.ini` is located:

```bash
pytest
```

### 6. Clean Up dataabse

To clean up the databse, go to the root directory of the project and run the following command

```bash
chmod +x cleanup_db.sh
./cleanup_db.sh
```
