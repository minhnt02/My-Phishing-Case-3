FROM python:3.11-slim

RUN apt-get update
RUN apt-get install -y telnet
RUN apt-get install -y net-tools
RUN apt-get install -y autoconf
RUN apt-get install -y g++ -y
RUN apt-get install -y python3-dev
# Create directory for the app user
RUN mkdir -p /home/app
COPY requirements.txt /home/app/
RUN pip install --upgrade pip
RUN pip install --trusted-host pypi.python.org --requirement /home/app/requirements.txt

# Create the app user
RUN groupadd app && useradd -g app app

# Create the home directory
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Copy in the Flask code
COPY . $APP_HOME

# Change own all the files to the app user
RUN chown -R app:app $APP_HOME

# Change to the app user
USER app

# run server
CMD gunicorn -w 4 -k gevent -b 0.0.0.0:10000 -t 8400 "manage:build_app()"

EXPOSE 10000
