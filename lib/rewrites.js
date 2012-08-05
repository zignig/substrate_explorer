module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/bootstrap/*', to: 'bootstrap/*'},
    {from: '/', to: '_show/frontpage/'},
	{from: '/authors', to: '_list/authors/home',limit:30},
	{from: '/display', to: '_show/display'},
	{from: '/doc/*', to: '../../*'}

];
