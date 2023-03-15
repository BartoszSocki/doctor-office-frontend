interface ProfileProps {
  name: string
  surname: string
  email: string
  specialization: [string]
}

const Profile = ({ name, surname, email, specialization }: ProfileProps) => {
  return (
    <div>
      <div>
        <p>name: {name}</p>
        <p>surname: {surname}</p>
        <p>email: {email}</p>
        <p>specialization: {specialization}</p>
      </div>
    </div>
  )
}

export default Profile
