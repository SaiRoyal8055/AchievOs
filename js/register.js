/*=====================================================
            REGISTER.JS
            PART 4A-1
=====================================================*/

/*  STATE  */
let isDark = false,
    currentUser = null;
let chatHistory = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('htmlRoot').classList.toggle('lm', !isDark);
});

/*  THEME  */
function toggleTheme() {
    isDark = !isDark;
    document.getElementById('htmlRoot').classList.toggle('lm', !isDark);
    // Landing icons
    const si = document.getElementById('suni'),
        mi = document.getElementById('mooni');
    if (si) {
        si.style.display = isDark ? 'none' : 'inline';
        mi.style.display = isDark ? 'inline' : 'none';
    }
    // Dashboard icons
    const dsi = document.getElementById('dbSunI'),
        dmi = document.getElementById('dbMoonI');
    if (dsi) {
        dsi.style.display = isDark ? 'none' : 'inline';
        dmi.style.display = isDark ? 'inline' : 'none';
    }
    // Sync settings toggle
    const dmtog = document.getElementById('darkModeToggle');
    if (dmtog) dmtog.checked = isDark;
    // Update charts
    updateChartColors();
}
document.getElementById('thbtn').addEventListener('click', toggleTheme);

/*  NAVBAR  */
window.addEventListener('scroll', () => document.getElementById('nbar').classList.toggle('scr', scrollY > 40));
let mbOpen = false;
document.getElementById('mbtog').addEventListener('click', () => {
    mbOpen = !mbOpen;
    document.getElementById('mbmenu').classList.toggle('open', mbOpen);
    document.getElementById('barIcon').style.display = mbOpen ? 'none' : 'inline';
    document.getElementById('xIcon').style.display = mbOpen ? 'inline' : 'none';
});
document.querySelectorAll('#mbmenu a, #mbmenu button').forEach(el =>
    el.addEventListener('click', () => {
        mbOpen = false;
        document.getElementById('mbmenu').classList.remove('open');
        document.getElementById('barIcon').style.display = 'inline';
        document.getElementById('xIcon').style.display = 'none';
    })
);


"use strict";

/*=====================================================
                GLOBAL VARIABLES
=====================================================*/

let otpVerified = false;
let submitAttempted = false;

/*=====================================================
                DOM READY
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initializeDatePicker();

    initializeWhatsappSync();

    initializePincodeLookup();

    initializeInputEffects();

});


/*=====================================================
            DATE PICKER
=====================================================*/

function initializeDatePicker() {

    if (typeof $ === "undefined") return;

    const currentYear = new Date().getFullYear();

    $("#dob").datepicker({

        changeMonth: true,

        changeYear: true,

        yearRange: "1995:" + currentYear,

        maxDate: 0,

        minDate: new Date(1995, 0, 1),

        dateFormat: "yy-mm-dd",

        onSelect: function () {

            this.classList.remove("is-invalid");

            this.classList.add("is-valid");

        }

    });

    $("#dob").on("keydown", function (e) {

        const allowed = [

            8,9,16,37,38,39,40,46

        ];

        if (!allowed.includes(e.which)) {

            e.preventDefault();

        }

    });

    $("#dob").on("paste", function (e) {

        e.preventDefault();

    });

}


/*=====================================================
        WHATSAPP = MOBILE
=====================================================*/

function initializeWhatsappSync() {

    const mobile = document.getElementById("mobile");

    const whatsapp = document.getElementById("whatsapp");

    const checkbox = document.getElementById("whatsappCheck");

    if (!mobile || !whatsapp || !checkbox) return;

    checkbox.addEventListener("change", function () {

        if (this.checked) {

            whatsapp.value = mobile.value;

            whatsapp.readOnly = true;

        }

        else {

            whatsapp.readOnly = false;

        }

    });

    mobile.addEventListener("input", function () {

        if (checkbox.checked) {

            whatsapp.value = mobile.value;

        }

    });

}


/*=====================================================
            PINCODE LOOKUP
=====================================================*/

function initializePincodeLookup() {

    const pincode = document.getElementById("pincode");

    if (!pincode) return;

    pincode.addEventListener("input", function () {

        if (this.value.length !== 6) return;

        fetch(

            "https://api.postalpincode.in/pincode/" + this.value

        )

        .then(res => res.json())

        .then(data => {

            if (

                data[0].Status === "Success"

            ) {

                document.getElementById("city").value =

                data[0].PostOffice[0].District;

                document.getElementById("state").value =

                data[0].PostOffice[0].State;

            }

            else {

                alert("Invalid Pincode");

            }

        })

        .catch(() => {

            alert(

                "Unable to fetch pincode."

            );

        });

    });

}


/*=====================================================
            INPUT EFFECTS
=====================================================*/

function initializeInputEffects() {

    document

    .querySelectorAll(

        ".form-control,.form-select"

    )

    .forEach(input => {

        input.addEventListener(

            "focus",

            function () {

                this.parentElement.classList.add(

                    "focused"

                );

            }

        );

        input.addEventListener(

            "blur",

            function () {

                this.parentElement.classList.remove(

                    "focused"

                );

            }

        );

    });

}


/*=====================================================
            VALIDATION HELPERS
=====================================================*/

function markValid(field) {

    field.classList.remove("is-invalid");

    field.classList.add("is-valid");

}

function markInvalid(field) {

    field.classList.remove("is-valid");

    field.classList.add("is-invalid");

}

function clearValidation(field) {

    field.classList.remove("is-valid");

    field.classList.remove("is-invalid");

}


/*=====================================================
            EMAIL VALIDATION
=====================================================*/

function isValidEmail(email) {

    const regex =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}


/*=====================================================
            MOBILE VALIDATION
=====================================================*/

function isValidMobile(number) {

    return /^[6-9][0-9]{9}$/.test(number);

}


/*=====================================================
            END OF PART 4A-1
=====================================================*/




/*=====================================================
            REGISTER.JS
            PART 4A-2
======================================================*/


/*=====================================================
        COURSE DATA
======================================================*/

const higherStudies = {

    BA: [

        "M.A - English",
        "M.A - History",
        "M.A - Economics",
        "MBA",
        "MCA"

    ],

    "B.Sc": [

        "M.Sc - Mathematics",
        "M.Sc - Physics",
        "M.Sc - Chemistry",
        "M.Sc - Computer Science",
        "MBA",
        "MCA"

    ],

    "B.Com": [

        "M.Com",
        "MBA - Finance",
        "MBA - HR",
        "MBA - Marketing",
        "MCA"

    ],

    BBA: [

        "MBA - Finance",
        "MBA - Marketing",
        "MBA - HR",
        "MBA - Business Analytics",
        "M.Com"

    ],

    BCA: [

        "MCA",
        "M.Sc Computer Science",
        "M.Sc Data Science",
        "MBA"

    ]

};


/*=====================================================
        INITIALIZE EDUCATION
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeEducation();

    initializeFee();

});


function initializeEducation() {

    const standard = document.getElementById("standardSelect");

    const course = document.getElementById("degreeCourseSelect");

    const applying = document.getElementById("courseSelect");

    const courseDiv = document.getElementById("degreeCourseDiv");

    const yearDiv = document.getElementById("degreeYearDiv");

    if (!standard) return;


    updateEducationFields();

    standard.addEventListener("change", updateEducationFields);

    course.addEventListener("change", updateApplyingCourses);


    function updateEducationFields() {

        if (standard.value === "Degree") {

            courseDiv.style.display = "block";

            yearDiv.style.display = "block";

        }

        else {

            courseDiv.style.display = "none";

            yearDiv.style.display = "none";

        }

    }


    function updateApplyingCourses() {

        applying.innerHTML =

            '<option value="">Select Course</option>';

        const selected = course.value;

        if (!higherStudies[selected]) return;

        higherStudies[selected].forEach(item => {

            const option = document.createElement("option");

            option.value = item;

            option.textContent = item;

            applying.appendChild(option);

        });

    }

}


/*=====================================================
            FEE
======================================================*/

function initializeFee() {

    const standard = document.getElementById("standardSelect");

    const fee = document.getElementById("feeInput");

    if (!standard || !fee) return;

    updateFee();

    standard.addEventListener(

        "change",

        updateFee

    );

    function updateFee() {

        if (standard.value === "Degree") {

            fee.value = "₹1799";

        }

        else {

            fee.value = "";

        }

    }

}


/*=====================================================
            SEND OTP
======================================================*/

async function sendOTP() {

    const email =

        document.getElementById("email").value.trim();

    if (!isValidEmail(email)) {

        alert("Please enter a valid email.");

        return;

    }

    const btn =

        document.getElementById("sendOtpBtn");

    btn.disabled = true;

    btn.innerHTML =

        '<i class="fa fa-spinner fa-spin"></i> Sending';

    try {

        const response = await fetch(

            "/send-otp",

            {

                method: "POST",

                headers: {

                    "Content-Type":

                    "application/json"

                },

                body: JSON.stringify({

                    email

                })

            }

        );

        const data =

            await response.json();

        if (

            data.status === "success"

        ) {

            startOtpTimer();

            alert("OTP sent successfully.");

        }

        else {

            throw new Error();

        }

    }

    catch {

        alert("Unable to send OTP.");

        btn.disabled = false;

        btn.innerHTML = "Send OTP";

    }

}


/*=====================================================
            OTP TIMER
======================================================*/

function startOtpTimer() {

    const btn =

        document.getElementById("sendOtpBtn");

    let seconds = 30;

    btn.innerHTML =

        `Resend in ${seconds}s`;

    const timer = setInterval(() => {

        seconds--;

        if (seconds <= 0) {

            clearInterval(timer);

            btn.disabled = false;

            btn.innerHTML =

                "Resend OTP";

        }

        else {

            btn.innerHTML =

                `Resend in ${seconds}s`;

        }

    },1000);

}


/*=====================================================
            VERIFY OTP
======================================================*/

async function verifyOTP() {

    const otp =

        document.getElementById("otp").value.trim();

    if (otp.length !== 6) {

        alert("Enter valid OTP.");

        return;

    }

    const btn =

        document.getElementById("verifyOtpBtn");

    btn.disabled = true;

    btn.innerHTML =

        '<i class="fa fa-spinner fa-spin"></i>';

    try {

        const response = await fetch(

            "/verify-otp",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify({

                    otp

                })

            }

        );

        const data =

            await response.json();

        if (

            data.status === "success"

        ) {

            otpVerified = true;

            btn.classList.remove(

                "btn-success"

            );

            btn.classList.add(

                "btn-primary"

            );

            btn.innerHTML =

                '<i class="fa fa-check"></i> Verified';

            document

            .getElementById("otp")

            .readOnly = true;

        }

        else {

            throw new Error();

        }

    }

    catch {

        otpVerified = false;

        btn.disabled = false;

        btn.innerHTML =

            "Verify OTP";

        alert("Invalid OTP");

    }

}


/*=====================================================
        BUTTON EVENTS
======================================================*/

document.addEventListener(

    "DOMContentLoaded",

    function(){

        const sendBtn =

        document.getElementById(

            "sendOtpBtn"

        );

        const verifyBtn =

        document.getElementById(

            "verifyOtpBtn"

        );

        if(sendBtn){

            sendBtn.addEventListener(

                "click",

                sendOTP

            );

        }

        if(verifyBtn){

            verifyBtn.addEventListener(

                "click",

                verifyOTP

            );

        }

    }

);


/*=====================================================
        END PART 4A-2
======================================================*/



/*=====================================================
            REGISTER.JS
            PART 4B
======================================================*/


/*=====================================================
            TERMS MODAL
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeTermsModal();

    initializeFormValidation();

    initializePromoCode();

});


function initializeTermsModal() {

    const checkbox = document.getElementById("agreeCheckbox");

    const modal = document.getElementById("termsModal");

    const accept = document.getElementById("acceptBtn");

    const close = document.querySelector(".close");

    if (!checkbox || !modal) return;

    checkbox.addEventListener("click", function (e) {

        e.preventDefault();

        modal.style.display = "block";

    });

    if (accept) {

        accept.addEventListener("click", function () {

            checkbox.checked = true;

            modal.style.display = "none";

        });

    }

    if (close) {

        close.addEventListener("click", function () {

            modal.style.display = "none";

        });

    }

    window.addEventListener("click", function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}


/*=====================================================
            PROMO CODE
======================================================*/

function initializePromoCode() {

    const promo = document.getElementById("promoCode");

    const fee = document.getElementById("feeInput");

    const button = document.querySelector(".btn-warning");

    if (!promo || !fee || !button) return;

    button.addEventListener("click", function () {

        const code = promo.value.trim().toUpperCase();

        if (code === "ACHIEVO800") {

            fee.value = "₹999";

            promo.readOnly = true;

            button.disabled = true;

            button.innerHTML =

                '<i class="fa fa-check"></i> Applied';

            showToast("Promo code applied.");

        }

        else {

            showToast("Invalid promo code.");

        }

    });

}


/*=====================================================
            FORM VALIDATION
======================================================*/

function initializeFormValidation() {

    const form =

        document.getElementById("registrationForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        submitAttempted = true;

        let valid = true;

        const fields =

            form.querySelectorAll(

                "input,select,textarea"

            );

        fields.forEach(field => {

            if (

                field.type === "hidden"

            ) return;

            if (

                field.hasAttribute("required") &&

                field.value.trim() === ""

            ) {

                markInvalid(field);

                valid = false;

            }

            else {

                if (

                    field.type === "email"

                ) {

                    if (

                        !isValidEmail(field.value)

                    ) {

                        markInvalid(field);

                        valid = false;

                        return;

                    }

                }

                if (

                    field.name === "mobile" ||

                    field.name === "whatsapp"

                ) {

                    if (

                        !isValidMobile(field.value)

                    ) {

                        markInvalid(field);

                        valid = false;

                        return;

                    }

                }

                markValid(field);

            }

        });

        if (!otpVerified) {

            e.preventDefault();

            showToast("Please verify OTP.");

            return;

        }

        const agree =

            document.getElementById(

                "agreeCheckbox"

            );

        if (

            agree && !agree.checked

        ) {

            e.preventDefault();

            showToast(

                "Accept Terms & Conditions."

            );

            return;

        }

        if (!valid) {

            e.preventDefault();

            showToast(

                "Complete all required fields."

            );

        }

    });

    enableLiveValidation(form);

}


/*=====================================================
        LIVE VALIDATION
======================================================*/

function enableLiveValidation(form) {

    const fields =

        form.querySelectorAll(

            "input,select,textarea"

        );

    fields.forEach(field => {

        field.addEventListener(

            "input",

            function () {

                if (

                    !submitAttempted

                ) return;

                if (

                    this.value.trim() === ""

                ) {

                    markInvalid(this);

                }

                else {

                    if (

                        this.type === "email"

                    ) {

                        if (

                            isValidEmail(

                                this.value

                            )

                        )

                            markValid(this);

                        else

                            markInvalid(this);

                        return;

                    }

                    if (

                        this.name === "mobile" ||

                        this.name === "whatsapp"

                    ) {

                        if (

                            isValidMobile(

                                this.value

                            )

                        )

                            markValid(this);

                        else

                            markInvalid(this);

                        return;

                    }

                    markValid(this);

                }

            }

        );

    });

}


/*=====================================================
            TOAST
======================================================*/

function showToast(message) {

    let toast =

        document.getElementById("customToast");

    if (!toast) {

        toast =

            document.createElement("div");

        toast.id = "customToast";

        toast.style.position = "fixed";

        toast.style.right = "25px";

        toast.style.bottom = "25px";

        toast.style.background = "#111827";

        toast.style.color = "#fff";

        toast.style.padding = "14px 22px";

        toast.style.borderRadius = "12px";

        toast.style.boxShadow =

            "0 12px 30px rgba(0,0,0,.35)";

        toast.style.zIndex = "99999";

        toast.style.opacity = "0";

        toast.style.transition = ".35s";

        document.body.appendChild(toast);

    }

    toast.innerHTML = message;

    toast.style.opacity = "1";

    setTimeout(() => {

        toast.style.opacity = "0";

    },3000);

}


/*=====================================================
        SCROLL ANIMATION
======================================================*/

window.addEventListener("scroll", () => {

    document.querySelectorAll(

        ".registration-card,.side-ads"

    ).forEach(el => {

        const top =

            el.getBoundingClientRect().top;

        if (

            top < window.innerHeight - 80

        ) {

            el.style.opacity = "1";

            el.style.transform =

                "translateY(0)";

        }

    });

});


/*=====================================================
        INITIAL EFFECT
======================================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".registration-card,.side-ads"

    ).forEach(el => {

        el.style.opacity = "0";

        el.style.transform =

            "translateY(40px)";

        el.style.transition =

            ".8s ease";

        setTimeout(() => {

            el.style.opacity = "1";

            el.style.transform =

                "translateY(0)";

        },200);

    });

});


/*=====================================================
        END OF FILE
======================================================*/