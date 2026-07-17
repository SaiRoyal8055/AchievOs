const chatbotData = {


    start: {

        message: "👋 <b>Welcome to Scholarship Assistant</b><br><br>Select a topic below to get started.",

        options: [
            "OTP Issue",
            "Name Correction",
            "Payment Issue",
            "Promo Code Error",
            "Contact Support"
        ]

    },

    
    // OTP ISSUE

    "OTP Issue": {

        message: "📩 <b>OTP Issue</b><br><br>Please select your problem.",

        options: [
            "Didn't Receive OTP",
            "Wrong Email Address",
            "OTP Expired",
            "Main Menu"
        ]

    },

    "Didn't Receive OTP": {

        message: `
        <b>Didn't Receive OTP</b>

        <br><br>

        ✔ Check your registered Email.

        <br>

        ✔ Check Spam/Junk folder.

        <br>

        ✔ Wait for 2 minutes.

        <br>

        ✔ Click Resend OTP.

        <br>

        ✔ Refresh the page.

        `,

        options: [
            "Main Menu"
        ]

    },

    "Wrong Email Address": {

        message: `
        <b>Wrong Email Address</b>

        <br><br>

        Login again using the correct Email address.

        If already submitted,

        contact Support Team.

        `,

        options: [
            "Main Menu"
        ]

    },

    "OTP Expired": {

        message: `
        <b>OTP Expired</b>

        <br><br>

        Refresh the page.

        `,

        options: [
            "Main Menu"
        ]

    },

    // NAME


    "Name Correction": {

        message: " <b>Name Correction</b><br><br>Select one option.",

        options: [
            "Before Submission",
            "After Submission",
            "Main Menu"
        ]

    },

    "Before Submission": {

        message: `
        You can edit your name before submitting the application.

        `,

        options: [
            "Main Menu"
        ]

    },

    "After Submission": {

        message: `
        Once submitted,

        please contact the Support Team

        to request a name correction.Or 
        
        check your profile to edit option.

        `,

        options: [
            "Main Menu"
        ]

    },


    "Payment Issue": {

        message: `
         <b>Payment Issue</b>

        <br><br>

        Choose your issue.

        `,

        options: [
            "Payment Failed",
            "Money Deducted",
            "Payment Pending",
            "Main Menu"
        ]

    },

    "Payment Failed": {

        message: `
        Check your internet connection.

        Try again after a few minutes.

        `,

        options: [
            "Main Menu"
        ]

    },

    "Money Deducted": {

        message: `
        If the amount was deducted,

        keep your Transaction ID

        and contact Support.

        `,

        options: [
            "Main Menu"
        ]

    },

    "Payment Pending": {

        message: `
        Wait for 30 minutes.

        If still pending,

        contact Support Team.

        `,

        options: [
            "Main Menu"
        ]

    },


"Promo Code Error": {

    message: `
    <b>Promo Code Verification</b>
    <br><br>
    Please enter your promo code to check.
    <br><br>

    <input id="promoInput" 
    type="text" 
    placeholder="Enter Promo Code"
    style="padding:10px;border-radius:8px;border:1px solid #ccc;width:100%;">

    <br><br>

    <button onclick="checkPromoCode()"
    style="background:#2563eb;color:white;border:none;padding:10px 15px;border-radius:20px;">
    Check Code
    </button>
    `,

    options: ["Main Menu"]   

},


    "Forgot Password": {

        message: `
        Click Forgot Password.

        Enter your registered Email.

        Follow the reset instructions.

        `,

        options: [
            "Main Menu"
        ]

    },

 
    "Contact Support": {

        message: `
         Contact Support

        <br><br>

        Email: support@example.com

        `,

        options: [
            "Main Menu"
        ]

    },

 
    "Main Menu": {

        message: " <b>Main Menu</b><br><br>How can I help you today?",

        options: [
            "OTP Issue",
            "Name Correction",
            "Payment Issue",
            "Promo Code Error",
            "Contact Support"
        ]

    }

};