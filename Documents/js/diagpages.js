var hdrHeight = $("#top-hdr").height();
$("body").animate({ paddingTop: hdrHeight + 10 });
$("nav").offset({ top: hdrHeight + 1 });

$(document).ready(function() {
	$("#rfrshBtn").click(function() {
		window.location.reload(true);
	});
	$("#rfrshBtn").hover(function(e) {
		$("#rfrshBtnIcn").toggleClass("fa-spin");
	});
	$("#goHomeBtn").click(function() {
		window.history.back();
	});

	//Navigation Menu Slider
	$("#hamb-icon").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("open");

		$("body").toggleClass("nav-expanded");
	});
	$("#nav-close").on("click", function(e) {
		e.preventDefault();
		$("body").removeClass("nav-expanded");
	});

	$("#exportLogPdfBtn").click(function() {
		var element = document.getElementById('#logBody');
		html2pdf(element, {
			margin:       1,
			filename:     'log-data.pdf',
			image:        { type: 'jpeg', quality: 0.98 },
			html2canvas:  { dpi: 192, letterRendering: true },
			jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
		});
	});
});

$("body").flowtype({
	minFont: 8,
	maxFont: 14,
	fontRatio: 35
});

$(window).scroll(function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		$("#scrollTopBtn").css({ display: "block" });
	} else {
		$("#scrollTopBtn").css({ display: "none" });
	}
});

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
