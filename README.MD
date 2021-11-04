

## Charicha Tech
Charicha Tech is website providing all the latest news about all the latest Technologies in Nepal. 



### Charicha Tech API (MVP)
#### Users
Users fetches and consumes the news.

```JSON
{
  "first_name": "Ram",
  "last_name": "Prasad",
  "nickname": "rame",
  "email": "ramprasad@gmail.com",
  "password": "prasad00"
}
```

REST API Route for User, 
Get User
``` REST
GET: http://localhost:3000/api/v1/users/617e99c39228451532f628f9
```

Update user with JSON body 
``` REST
POST: http://localhost:3000/api/v1/users/617e99c39228451532f628f9
```

Create user with JSON body
``` REST
POST: http://localhost:3000/api/v1/users
```

Delete user
``` REST
DELETE: http://localhost:3000/api/v1/users/617e99c39228451532f628f9
```
