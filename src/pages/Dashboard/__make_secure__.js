/**

 * ---------------
 *      BASIC
 * ---------------
 * 1. do not show the link to them who should not see it only
      show to the person/types of user who should see it
 * 2. even if they gets the link, do not allow them to visit the
      link by typing on the url. 
 * 3. use AdminRoute that will check whether the user is admin
      or not
 * 4. if not admin then redirect to any other page. you could
      logout user 
 * 5. and send them to the login page as well.
 * 6. do not allow user to access the api. check admin in the
      server as well (verifyAdmin)

 * ---------------------------
 *      TO SEND DATA
 * ---------------------------
 * 1. verify jwt token (send authorization token in the header
      to the server). 
 * 2. If possible use axios to send jwt token by intercepting
      the request
 * 3. if it is an admin activity. Make sure only admin user is
      posting data
 * 4. by using verifyAdmin

**/