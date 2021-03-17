 FROM python:3.7-buster
 ENV PYTHONUNBUFFERED 1
 RUN mkdir /code
 WORKDIR /code
 COPY requirements.txt /code/
 RUN pip3 install -r requirements.txt
 COPY . /code/

EXPOSE 5000
EXPOSE 5500
CMD ["python", "-m", "flask", "run"]
