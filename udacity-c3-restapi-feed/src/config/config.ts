export const config = {
  "dev": {
    "username":"udagramissah",
    "password": "hayatu88",
    "database": "udagramissah",
    "host": "udagramissah.c2ovwhx32p7w.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagramissah"
  },
  "prod": {
    "username": "udagramissah",
    "password": "hayatu88",
    "database": "udagramissah",
    "host": "udagramissah.c2ovwhx32p7w.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
