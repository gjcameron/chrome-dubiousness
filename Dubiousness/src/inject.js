const expertsAreDubious = (window.location.pathname.includes("/es/")) ? "Las expertas son dudosas." : "Experts Are Dubious.";
const punct = /[.!?]$/;

function makeDubious(el) {
	if (punct.test(el.text().trim()) == false) {
		el.append(".");	
	}	
	el.append(" " + expertsAreDubious);
}

$.initialize('article a h3', function() {
	makeDubious($(this));
});
$.initialize('[data-testid="headline"]', function() {
	makeDubious($(this));
});
$.initialize('[data-testid="search-results"] a h4', function() {
	makeDubious($(this));
});
$.initialize('#collection-highlights-container li a', function() {
	makeDubious($(this));
});
$.initialize('.story-wrapper p.indicate-hover', function() {
	makeDubious($(this));
});
$.initialize('[data-testid="well-section"] article a p', function() {
	makeDubious($(this));
});

