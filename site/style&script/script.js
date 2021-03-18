function fold (event){
	if (document.body.clientWidth > 768){
		event.target.className = 'folded';
	}
}
function unfold(event) {
	if (document.body.clientWidth > 768){
		event.target.className = 'unfold';
	}
}
function openHamburger (event){
	document.getElementsByTagName('NAV')[0].className = 'opened';
}
function clickOnScreen (event){
	if (event.clientX > 300 || event.pageX > 300) {
		document.getElementsByTagName('NAV')[0].className = 'closed';
	}
	console.log(event.clientX, ' ', event.pageX);
}
function toggleParentFoldHamburger(event){
	if (event.target.parentNode.parentNode.className == 'folded'){
		event.target.parentNode.parentNode.className = 'unfold';
	} else {
		event.target.parentNode.parentNode.className = 'folded';
	}
	console.log('a');
}
function toggleTable (event) {
	if (event.target.parentNode.parentNode.className == "table-closed") {
		event.target.parentNode.parentNode.className = "table-opened";
	}else {
		event.target.parentNode.parentNode.className = "table-closed";
	}
}
function foldAll() {
	var allUnfolded = document.getElementsByClassName('unfold');
	for (i=0; i<allUnfolded.length; i++) {
		allUnfolded[i].className='folded';
	}
	document.getElementsByTagName("NAV")[0].className = 'closed';
	console.log("AAA");
}
document.body.addEventListener ('click', (event)=>{clickOnScreen(event)});
window.addEventListener ('resize', foldAll);
var bodyText = document.body.innerHTML;
var beforeBody = `
<header>
	<a href='index.html'><img src='images/abcoptical-logo.png'></a>
	<div><img src='images/hamburger.png' onclick='openHamburger()'></div>
</header>
<nav class='closed'>
	<ul>
		<li><a href='index.html#0'>Home</a></li>
	</ul>
	<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
		<li><a href='info.html#0' accesskey='i'>Info</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
		<li><a href='info.html#1'>About the owner</a></li>
		<li><a href='info.html#2'>Our Brands</a></li>
	</ul>
	<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
		<li>
			<a href='services.html#0' accesskey='s'>Services</a>
		<img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
		<li>
			<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
				<li><a href='services.html#1'>Examinations</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
				<li><a href='services.html#1.1'>Eye Examinations</a></li>
				<li><a href='services.html#1.2'>Eye Muscle Movement & Control</a></li>
				<li><a href='services.html#1.3'>Amblyopia (Lazy Eye)</a></li>
				<li><a href='services.html#1.4'>Diabetic Eye Examinations</a></li>
			</ul>
		</li>
		<li>
			<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
				<li><a href='services.html#2'>Assessments</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
				<li><a href='services.html#2.1'>Colour Vision Assesments</a></li>
				<li><a href='services.html#2.2'>Macular Degeneration Testing</a></li>
				<li><a href='services.html#2.3'>Glaucoma & eye pressure testing</a></li>
				<li><a href='services.html#2.4'>Check for Cataracts</a></li>
				<li><a href='services.html#2.5'>Clearness of vision</a></li>
			</ul>
		</li>
		<li>
			<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
				<li><a href='services.html#3'>Solutions</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
				<li><a href='services.html#3.1'>Spectacles</a></li>
				<li><a href='services.html#3.2'>Focusing Ability</a></li>
				<li><a href='services.html#3.3'>Contact Lens Fitting & Management</a></li>
				<li><a href='services.html#3.4'>Referrals for Eye Laser Surgery</a></li>
				<li><a href='services.html#3.5'>Mining & Industrial Spectacles</a></li>
				<li><a href='services.html#3.6'>Sunglasses Fitting</a></li>
			</ul>
		</li>
	</ul>
	<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
		<li><a href='locate.html#0' accesskey='l'>Store Information</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
		<li><a href='locate.html#1'>Location</a></li>
		<li><a href='locate.html#2'>Opening Times</a></li>
	</ul>
	<ul class='folded' onmouseenter='unfold(event)' onmouseleave='fold(event)'>
		<li><a href='consult.html#0' accesskey='c'>Contact</a><img src='images/drop-down-arrow.png' onclick='toggleParentFoldHamburger(event)'></li>
		<li><a href='consult.html#1'>Book an Appointment</a></li>
		<li><a href='consult.html#2'>Rewnew a Script</a></li>
		<li><a href='consult.html#3'>Contact Us</a></li>
		<li><a href='consult.html#4'>Our Newsletter</a></li>
	</ul>
</nav>
<main>`;
var afterBody = `
</main>
<footer>
	<section>
		<a href='locate-contact.html#2'>Contact Us</a>
		<a>&copy; ABCOptical 2021</a>
		<a>&copy; Hayden Blomfield 2021</a>
		<div>
			<h3>Sitemap</h3>
			<a href='index.html#0'>Homepage</a>
			<a href='info.html#0'>Information</a>
			<a href='services.html#0'>Services</a>
			<a href='consult.html#0'>Locate/Contact</a>
			<a href='consult.html#0'>Consultation</a>
		</div>
		<div>
			<h3>Copyright and Refrences</h3>
			<table>
				<tr>
					<td><img src='images/abcoptical-logo.png' width='150'></td>
					<td><a>&copy; ABCOptical 2021</a></td>
				</tr>
				<tr>
					<td><img src='images/hblom-logo.png' width='150'></td>
					<td><a>&copy; Hayden Blomfield 2021</a></td>
				</tr>
			</table>
		</div>
	</section>
</footer>`;

document.body.innerHTML = beforeBody + bodyText + afterBody;
