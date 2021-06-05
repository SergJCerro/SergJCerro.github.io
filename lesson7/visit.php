<html>
<head>
<title>Last Visit using Cookies</title>
</head>
<body bgcolor="#cCCFFCC" text="#003300">
<h1> Web Programming Lab</h1>
<p> Welcome to Web Programming Lab </p>
<hr />
<p style="color:blue; font-style: italic">
<?php
date_default_timezone_set('Asia/Calcutta');
//Calculate 60 days in the future
//seconds * minutes * hours * days + current time
// set expiry date to two months from now
$inTwoMonths = 60 * 60 * 24 * 60 + time();
setcookie('lastVisit', date("G:i - m/d/y"), $inTwoMonths);
if(isset($_COOKIE['lastVisit']))
{
$visit = $_COOKIE['lastVisit'];
echo "Last Visited on : ".$visit;
}
else
echo "You've got some old cookies!";
?>
</p>
</body>
</html>