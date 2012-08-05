module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/bootstrap/*', to: 'bootstrap/*'},
    {from: '/', to: '_show/frontpage/'},
	{from: '/authors', to: '_list/authors/home',query :{ limit :'40'}},
	{from: '/display/:key', to: '_show/display/:key'},
	{from: '/doc/*', to: '../../*'}
];
