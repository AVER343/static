export default function IntroComponent(props) {
	return (
		<article
			id='intro'
			className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
			style={{ display: 'none' }}
		>
			<h2 className='major'>Intro</h2>
			<span className='image main'>
				<img src='/static/images/pic01.jpg' alt='' />
			</span>
			<p>
                ICS is a growing IT development and consultancy service company , with one simple objective- to give
                our guests with state-of-the-art online services so that they can concentrate on their core
				capabilities and achieve success. We harness the power of internet to give maximum visibility to our
				guests immolations.
			</p>
			<p>
				The swift pace of technological advancements has greatly diminished the barrier of time-to-market of
				complex and advanced solutions. Our Core Engineering Services team focuses on Software Development
				driven by Agile, Domain Design and Test-Driven Principles to ensure 100% requirement satisfaction and to
				guarantee control over project management. We follow process automation including Dev-Ops Operation,
				CI/CD release management, and end to end QA automation. With the help of in-house frameworks we
				guarantee quality and cost-effective solutions.
			</p>
			{props.close}
		</article>
	);
}
