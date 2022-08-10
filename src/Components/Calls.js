// const [accountData, setAccountData] = useState([]);

// const getAccounts = () => {
//   console.log(WEMES_URL);
//   axios
//     .get(`${WEMES_URL}users/`)
//     .then((response) => {
//       console.log(response);
//       const newData = response.data.map((account) => {
//         return {
//           id: account.id,
//           first_name: account.first_name,
//           last_name: account.last_name,
//           last_four: account.last_four,
//           phone_num: account.phone_num,
//           email: account.email,
//           code: account.code,
//           admin: account.admin,
//           is_active: account.is_active,
//           transactions: account.transactions,
//         };
//       });
//       setAccountData(newData);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };

// useEffect(() => getAccounts(), []);

// const getAccount = ({accounts.id}) => {
//   return getAccounts.map((account, index) => {
//     return (
//       (<li key={index}>{account.id}</li>),
//       (<li>{account.code}</li>),
//       (<li>{account.last_four}</li>),
//       (<li>{account.first_name}</li>),
//       (<li>{account.last_name}</li>),
//       (<li>{account.phone_num}</li>),
//       (<li>{account.email}</li>),
//       (<li>{account.admin}</li>),
//       (<li>{account.transactions}</li>)
//     );
//   });
// };
