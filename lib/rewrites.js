module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/bootstrap/*', to: 'bootstrap/*'},
    {from: '/', to: '_list/items/seen',query:{limit:'100'}},
	{from: '/authors', to: '_list/authors/home',query :{ limit :'40'}},
	{from: '/author/:key', to: '_list/items/author'},
	{from: '/tag/:key', to: '_list/items/tag'},
	{from: '/display/:key', to: '_show/display/:key'},
	{from: '/doc/*', to: '../../*'}
];
