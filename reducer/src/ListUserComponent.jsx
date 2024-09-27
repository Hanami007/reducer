export default function ListUserComponent({ userList }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {userList.map((user, index) => (
            <li key={index} className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold mr-4">
                {user.firstName.charAt(0)}
              </div>
              <div>
                <div>FirstName: {user.firstName}</div>
                <div>LastName: {user.lastName}</div>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phoneNumber}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
