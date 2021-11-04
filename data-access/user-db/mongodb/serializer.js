const _serializeSingle = (user) => {
  return {
    "id": user._id,
    "first_name": user.first_name,
    "last_name": user.last_name,
    "password": user.password,
    "nickname": user.nickname,
    "email": user.email,
    "roles": user.roles
  };
};

function serializer(data){
  if(!data) return null;
  if(Array.isArray(data))
    return data.map(_serializeSingle);
  return _serializeSingle(data);
}

module.exports = serializer;
