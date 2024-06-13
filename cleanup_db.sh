#!/bin/bash

# Delete the SQLite database file
echo "Deleting SQLite database file..."
rm db.sqlite3

# Delete all migration files except __init__.py
echo "Deleting migration files..."
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete

# Recreate the database and run initial migrations
echo "Making migrations..."
python manage.py makemigrations

echo "Applying migrations..."
python manage.py migrate

echo "Database cleanup completed."
