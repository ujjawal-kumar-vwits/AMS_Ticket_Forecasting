@echo off

cd /d %~dp0

IF NOT EXIST venv (
    python -m venv venv
)

call venv\Scripts\activate

python -m pip install --upgrade pip==26.2.1

pip install -r requirements.txt