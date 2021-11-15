import React from 'react';
import './FooterSearch.scss';
import content from '../../Localization/Content';

function FooterSearch({lang}) {
	return (
		<input
			className='search search--bg-img'
			type='search'
			placeholder={content[lang].footer.Search}
		/>
	);
}

export default FooterSearch;