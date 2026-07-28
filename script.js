const events = [
 {year:'1799',category:'khalsa',title:'Ranjit Singh captures Lahore',text:'The young Sukerchakia leader takes Lahore, the city that becomes the capital of his expanding state.'},
 {year:'1801',category:'khalsa',title:'The Khalsa Raj is proclaimed',text:'Ranjit Singh assumes the title Maharaja. His government uses the authority of the Khalsa while building a plural Lahore court.'},
 {year:'1809–1834',category:'khalsa',title:'Expansion and consolidation',text:'The kingdom grows through diplomacy and campaigns, taking Amritsar, Multan, Kashmir and Peshawar and controlling much of the historic Punjab region.'},
 {year:'1800s–1830s',category:'khalsa',title:'A modernized army and diverse administration',text:'The Fauj-i-Khas and artillery are reorganized with European expertise. Sikh, Muslim and Hindu officials hold important posts in the Lahore Darbar.'},
 {year:'1839',category:'khalsa',title:'Death of Maharaja Ranjit Singh',text:'Court rivalry and a rapid succession of rulers weaken central authority after the Maharaja’s death.'},
 {year:'1845–1846',category:'colonial',title:'First Anglo-Sikh War',text:'The East India Company defeats the Sikh kingdom and imposes treaties that sharply reduce Lahore’s independence.'},
 {year:'1848–1849',category:'colonial',title:'Second Anglo-Sikh War and annexation',text:'After renewed conflict, the East India Company annexes Punjab in March 1849. The young Maharaja Duleep Singh is deposed.'},
 {year:'1850s–1910s',category:'colonial',title:'British Punjab is remade',text:'Canal colonies, railways, commercial farming, military recruitment and new legal institutions transform land, mobility and power.'},
 {year:'1870s–1920s',category:'shared',title:'Religious reform and Punjabi public life',text:'Singh Sabha, Arya Samaj, Muslim reform networks, Christian missions and new print cultures reshape identity and debate.'},
 {year:'1913–1915',category:'colonial',title:'The Ghadar movement',text:'Punjabi migrants, many based in North America, organize revolutionary opposition to British rule.'},
 {year:'1919',category:'colonial',title:'Jallianwala Bagh massacre',text:'British troops fire on an unarmed gathering in Amritsar on 13 April, intensifying resistance to colonial rule.'},
 {year:'1920s–1940s',category:'colonial',title:'Mass politics and competing futures',text:'Akali reform, Congress nationalism, Unionist politics, the Muslim League, communist organizing and revolutionary movements compete for Punjab’s future.'},
 {year:'1947',category:'partition',title:'Punjab is partitioned',text:'British Punjab is divided between India and Pakistan. Mass displacement and communal violence destroy long-established mixed communities.'},
 {year:'1947–1950s',category:'india',title:'East Punjab rebuilds',text:'Sikh and Hindu refugees resettle in Indian Punjab. Chandigarh is planned as a new capital and towns absorb displaced families and businesses.'},
 {year:'1947–1950s',category:'pakistan',title:'West Punjab absorbs refugees',text:'Muslim migrants from eastern Punjab and other parts of India rebuild their lives in Lahore and cities and villages across Pakistani Punjab.'},
 {year:'1955–1970',category:'pakistan',title:'From One Unit to restored province',text:'Pakistani Punjab is temporarily merged into West Pakistan under the One Unit system; Punjab province is restored in 1970.'},
 {year:'1965–1970s',category:'shared',title:'The Green Revolution',text:'New seeds, irrigation, fertilizer, machinery and procurement raise wheat and rice output on both sides while creating ecological and social costs.'},
 {year:'1966',category:'india',title:'Indian Punjab is reorganized',text:'A Punjabi-speaking state is formed; Haryana separates, hill areas move to Himachal Pradesh and Chandigarh becomes a shared capital and union territory.'},
 {year:'1970s–1990s',category:'india',title:'Conflict, militancy and trauma',text:'Political and federal disputes escalate into militancy and counterinsurgency. Operation Blue Star, the assassination of Indira Gandhi and anti-Sikh massacres leave deep scars.'},
 {year:'1980s–2000s',category:'pakistan',title:'Urban and industrial expansion',text:'Lahore, Faisalabad, Gujranwala, Rawalpindi and Multan expand as centers of manufacturing, services, education and media.'},
 {year:'1990s–2010s',category:'shared',title:'Diaspora and cultural globalization',text:'Migration to Britain, North America, Europe, the Gulf and Australia expands. Punjabi music, film, fashion and digital culture reach global audiences.'},
 {year:'1999',category:'shared',title:'The Lahore–Delhi bus and new crossings',text:'Transport links and later religious-corridor initiatives symbolize repeated efforts to reconnect communities divided by the border.'},
 {year:'2019',category:'shared',title:'Kartarpur Corridor opens',text:'A visa-free corridor allows pilgrims from India to visit Gurdwara Darbar Sahib at Kartarpur in Pakistan.'},
 {year:'2020–2021',category:'india',title:'Farmers’ movement',text:'Punjab becomes a central base for protests against India’s three farm laws, which are repealed in 2021.'},
 {year:'Today',category:'shared',title:'Water, work, heritage and identity',text:'Both Punjabs confront groundwater decline, polluted rivers, changing agriculture, youth employment and rapid urbanization while preserving a globally influential culture.'}
];
const list=document.querySelector('#timeline-list');
function render(filter='all'){
 list.innerHTML=events.map(e=>`<article class="timeline-item ${filter!=='all'&&e.category!==filter?'hidden':''}" data-category="${e.category}"><div class="timeline-year">${e.year}</div><div class="timeline-content"><span class="category-tag">${e.category}</span><h3>${e.title}</h3><p>${e.text}</p></div></article>`).join('');
}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
