import React from 'react'
const github_username = 'Amansingh-afk'
const linkedin = 'aman-singh-afk'
const email = 'amansingh.afk@gmail.com'

const projects = [
	'Amansingh-afk/Spotify--Clone',
	'Amansingh-afk/chat-app-using-react-and-firebase',
	'Amansingh-afk/Ecom',
	// 'darkguy10/ControlPanelAPI.js',
	// 'darkguy10/Deb8M8',
	// 'darkguy10/EmojiSteal',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/Amansingh-afk',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://codepen.io/ZonFire99/full/EaYmGV',
		description: 'Personal website',
	},
	{
		name: 'Linkedin',
		icon: 'fab fa-fw fa-linkedin',
		link: `https://www.linkedin.com/in/${linkedin}`,
		description: ` my linkedin profile | Connect to me..`,
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
		name: 'Leetcode',
		icon: 'fas fa-fw fa-code',
		link : 'https://leetcode.com/Amansingh-afk/',
		description: 'check out my leetcode profile'
	}
]

const info = (
	<>
		<p>Yo! I'm a underGrad student pursuing career in computer science(cse).</p>
		<p>
			I've got intermediate experience with{' '}
			<span className="highlighted">JavaScript</span> and{' '}
			<span className="highlighted">Node.js</span>.
		</p>
		<p>
			I've been doing{' '}
			<span className="highlighted">back-end development</span>{' '} 
			for a couple of years now. Currently, I'm learning{' '}
			<span className="highlighted">Express.js</span> and{' '}
			<span className="highlighted">Vue.js</span>
		</p>
		<p>
			Aside from that, I have good knowledge of{' '}
			<span className="highlighted">java</span>,{' '}
			<span className="highlighted">c/c++</span> and{' '}
			<span className="highlighted">shell scripting.</span>
		</p>
	</>
)

const workHistory = [
	{
		name: 'Full stack developer intern @ Vamaship',
		icon: 'fas fa-fw fa-cube',
		time: 'oct 2022 - present',
		description: `<br/> &emsp;&emsp; oct 2022 - present
					<br />&emsp;&emsp; skills gained: Nodejs, Expressjs, Postman, Json`,
	},
	{
		name: 'Back-end developer intern @ Tech star IT solutions',
		icon: 'fas fa-fw fa-cube',
		time: 'jan 2022 - March 2022',
		description: `<br/> &emsp;&emsp; Jan 2022 - march 2022 
					  <br />&emsp;&emsp; skills gained: Nodejs, Expressjs, Postman, Json`,
	},
]

const joke = 
	 `A doctor tells a man that he has to stop masturbating. 
	 <br /> The man is surprised and says, "Why?" And the doctor says,
	 "Because I'm trying to examine you!`

export {
	github_username,
	email,
	projects,
	links,
	info,
	workHistory,
	joke,
}

