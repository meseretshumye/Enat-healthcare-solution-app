
import { useParams } from "react-router";
const SingleUserProfile = () => {
  const users = [
    { id: 1, fullName: "Alex Johnson" },
    { id: 2, fullName: "Michael Smith" },
    { id: 3, fullName: "Emily Davis" },
    { id: 4, fullName: "David Brown" },
    { id: 5, fullName: "Sarah Wilson" },
    { id: 6, fullName: "James Taylor" },
    { id: 7, fullName: "Jessica Lee" },
  ];
  const params = useParams();
  console.log(params);
  const userId = params.userId;
  const user = users.find((user) => user.id === parseInt(userId));
  //   or filter
  //   const user = users.filter((user) => user.id === parseInt(userId));

  console.log(user);
  return (
    <div className="container my-5">
      <h2> Single User Profile component</h2>
      <h4>{user?.fullName}</h4>
    </div>
  );
};

export default SingleUserProfile;
