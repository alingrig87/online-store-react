import React, { useState, useEffect } from 'react';
import ProductCard from '../components/Products/ProductCard';

const Home = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(
				'https://654bc6c15b38a59f28efb3a2.mockapi.io/products'
			);
			const products = await response.json();
			setProducts(products);
		};

		fetchProducts();
	}, []);

	return products ? (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<div key={product.id}>
					<ProductCard product={product} />
				</div>
			))}
		</div>
	) : (
		<div>Loading ...</div>
	);
};

export default Home;
