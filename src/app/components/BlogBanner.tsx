import React from 'react';

function BlogBanner() {
	return (
		<div className="w-full mb-28 relative bg-bannerBlog bg-[length:100%_100%]  justify-between items-center lg:items-center px-4 py-10 lg:px-[60px] lg:py-[50px] lg:h-[489px] rounded-[40px] flex-col-reverse lg:flex-row flex gap-4">
			<div className="left">
				<div className="max-w-[453px] h-36 p-8 bg-base rounded-lg flex-col justify-start items-start gap-4 inline-flex">
					<div className="self-stretch !tracking-tight text-white text-32-bold  !leading-10">
						Noticias, tips llenos de valiosa información
					</div>
				</div>
			</div>

			<div className="invisible lg:visible  arrow-banner left-2/4 bottom-[-20px] ml-[-24px] absolute cursor-pointer"></div>
		</div>
	);
}

export default BlogBanner;
