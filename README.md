FRONTEND - MIDDLE-END - BACKEND

- We need an intermediate layer between the client side and the microservices.

- Using this middle end , when client sends request we will be able to  make decsion that which microservice should actually respond to this request.

- We can do message validation, response transformation, rate limiting.

- We try to prepare an API Gateway to acts as this middle end.

- For creating proxy middleware I have  used http-proxy-middlware package.
- For creating rate limiting I have used express Rate limit package.
- For logging i have used morgan package.
