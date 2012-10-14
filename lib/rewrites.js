module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/bootstrap/*', to: 'bootstrap/*'},
	{from: '/home', to: '_list/items/home',query:{limit:'30'}},
    {from: '/', to: '_list/items/home',query:{limit:'50'}},
	{from: '/authors', to: '_list/authors/author_alpha',query:{group:'true'}},
	{from: '/authors/:startkey', to: '_list/show_authors/author_list',query :{ startkey : [':startkey'],endkey : [':startkey',{}],group:'true'}},
	{from: '/author/:key', to: '_list/items/author'},
	{from: '/tags', to: '_list/tags/tag_alpha',query:{group:'true'}},
	{from: '/tags/:startkey', to: '_list/show_tags/tag_list',query :{ startkey : [':startkey'],endkey : [':startkey',{}],group:'true'}},
	{from: '/tag/:key', to: '_list/items/tag'},
	{from: '/display/:key', to: '_show/display/:key'},
	{from: '/doc/*', to: '../../*'}
];
