//2.OTP Countdown Simulator (Console App)
//------------------------------------
        
        //Simulate OTP sending flow in Node.js:
        
        //Show “OTP Sent Successfully”
        console.log("OTP Sent Successfully")
        console.log("enter the otp")
       // Start 10-second countdown
       let seconds=10;
        let intervalId=setInterval(()=>
        {
            seconds--;
            console.log(`Otp valid until  ${seconds} seconds`);
            if(seconds===0)
            {
                console.log("resend otp")
                clearInterval(intervalId);
            }

        },1000)
       // Allow resend only after countdown ends
    