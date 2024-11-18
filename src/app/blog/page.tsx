import React from 'react';
import BlogBanner from '../components/BlogBanner';
import ItemProduct from '../components/ItemProduct';
import JoinUs from '@/components/JoinUs';
import TipsNutrition from '../components/TipsNutrition';

function Product() {
	return (
		<>
			<div className="container mt-6">
				<BlogBanner />

				<div className="max-w-[1120px] mx-auto">
					<ItemProduct />
					<TipsNutrition />
					<JoinUs />
				</div>
			</div>
		</>
	);
}

export default Product;
