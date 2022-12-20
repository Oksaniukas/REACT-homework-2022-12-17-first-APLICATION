import React, {useState} from "react";

function MainPage() {
   let [userCountNumber, setUserCountNumber] = useState(0);
   let [createNewUser, setCreateNewUser] = useState(
      {
        name: '',
        lastName: '',
        phone: '',
        email: '',  
        country: '',
        city: ''  
      }
   );

   function handleChange(event) {
      const {name, lastName,  phone, email, country, city, value} = event.target;
  
      setCreateNewUser(prev => {
        return {
          ...prev,
          [name]: value,
          [lastName]: value,
          [phone]: value,
          [email]: value,
          [country]: value,
          [city]: value
        }
      })
   }

   return (
      <div className="block-wrapper">
         <header>
            <button>
               Create a new User
            </button>
            <button >
               User List
            </button>
         </header>
         <div className="new-user-block">
            <form>
               <input
                  type='text'
                  placeholder="Name"
                  className="input-item"
                  name="name"
                  onChange={handleChange}
                  value={createNewUser.name}
               />
               <input
                  type='text'
                  placeholder="Lastname"
                  className="input-item"
                  name="lastName"
                  onChange={handleChange}
                  value={createNewUser.lastName}
               />
               <input
                  type='tel'
                  placeholder="Phone"
                  className="input-item"
                  name="phone"
                  onChange={handleChange}
                  value={createNewUser.phone}
               />
               <input
                  type='email'
                  placeholder="Email"
                  className="input-item"
                  name="email"
                  onChange={handleChange}
                  value={createNewUser.email}
               />
               <input
                  type='text'
                  placeholder="Country"
                  className="input-item"
                  name="country"
                  onChange={handleChange}
                  value={createNewUser.country}
               />
               <input
                  type='text'
                  placeholder="City"
                  className="input-item"
                  name="city"
                  onChange={handleChange}
                  value={createNewUser.city}
               />
               <button className="button" onClick={() => {setUserCountNumber(prev => prev+1)}}> 
               Create
               </button>
            </form>
         </div>
         <div className="user-list-block">
               <div className="user-list">
                  <div className="user-card-item">User Nb. {userCountNumber}</div>
                  <div className="user-card">
                     <div className="user-card-item">Name - {createNewUser.name}</div>
                     <div className="user-card-item">LastName - {createNewUser.lastName}</div>
                     <div className="user-card-item">Phone Nb. - {createNewUser.phone}</div>
                     <div className="user-card-item">Email - {createNewUser.email} </div>
                     <div className="user-card-item">Country - {createNewUser.country}</div>
                     <div className="user-card-item">City - {createNewUser.city}</div>
                  </div>
               </div>
         </div>
        
      </div>
   )
}


export default MainPage