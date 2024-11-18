import React from 'react';
import ProductBanner from '../components/ProductBanner';
import ItemProduct from '../components/ItemProduct';
import JoinUs from '@/components/JoinUs';
import ThreeImages from '../components/ThreeImages';

function Product() {
	return (
		<section className="container mt-6">
			<ProductBanner />
			<section className="text-center mb-12 text-base text-48-regular  leading-[56px]">
				Nuestros mejores productos
				<br />& big deals
			</section>
			<div className="max-w-[1120px] mx-auto">
				<ItemProduct />
				<ThreeImages />
				<JoinUs />
			</div>
		</section>
	);
}

export default Product;
