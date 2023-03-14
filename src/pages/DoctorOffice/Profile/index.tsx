type ProfileProps = {
  name: String;
  surname: String;
  email: String;
  specialization: [String];
};

const Profile = ({name, surname, email, specialization}: ProfileProps) => {
  return (
    <div>
      <div>
        <p>name: {name}</p>
        <p>surname: {surname}</p>
        <p>email: {email}</p>
        <p>specialization: {specialization}</p>
      </div>
    </div>
  );
}

export default Profile;