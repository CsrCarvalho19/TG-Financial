db.createUser(
   {
     user: "ruth",
     pwd:  "cnV0aEAxMjM="
     roles: [
       {
          role: "readWrite",
          db:   "tgFinancial"
       }
     ]
   }
)