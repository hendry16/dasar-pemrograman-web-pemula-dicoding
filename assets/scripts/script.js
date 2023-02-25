const cities = [
    {
        "city" : "Jakarta",
        "imgSource" : "https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM="
    },
    {
        "city" : "Medan",
        "imgSource" : "https://upload.wikimedia.org/wikipedia/commons/d/d6/Masjid_Raya_Al_Mashun_Medan.jpg"
    },
    {
        "city" : "Surabaya",
        "imgSource" : "https://image-tc.galaxy.tf/wijpeg-disdip2e4fi5ruw0xvobr5j8f/unknown.jpg?width=1920"
    },
    {
        "city" : "Bandung",
        "imgSource" : "https://media.istockphoto.com/id/1305893755/photo/night-at-bandung.jpg?b=1&s=170667a&w=0&k=20&c=xq7o027QOYMwmvkpXnNNfUUysPkdXSzC9ZJVHxIeXgc="
    },
    {
        "city" : "Manado",
        "imgSource" : "https://media.istockphoto.com/id/1263569964/photo/amirul-mukminin-mosque-makassar-south-sulawesi.jpg?b=1&s=170667a&w=0&k=20&c=qO9i0s8_luJSYUrKAyf2sojAQiswXSHe2i_tfsrSXYU="
    },
    {
        "city" : "Bogor",
        "imgSource" : "https://www.bogorraincake.com/wp-content/uploads/2017/08/kujang.png"
    },
    {
        "city" : "Jayapura",
        "imgSource" : "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/03/11/1020443809.jpg"
    },
    {
        "city" : "Lhokseumawe",
        "imgSource" : "https://upload.wikimedia.org/wikipedia/commons/6/6f/Bentor_Lhokseumawe.jpg"
    },
    {
        "city" : "Pontianak",
        "imgSource" : "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/kalimantan/west-kalimantan/pontianak/thumb/page_thumb.jpg"
    }
]

const culture = [
    {
        'name' : 'Batik',
        'imgSource' : 'https://static.wixstatic.com/media/1b77d3_e29115f8b4ba4a97b37abdbae5891974~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1b77d3_e29115f8b4ba4a97b37abdbae5891974~mv2.jpg'
    },
    {
        'name' : 'Tari Saman',
        'imgSource' : 'https://theinsidemag.com/wp-content/uploads/2019/09/1-11.jpg'
    },
    {
        'name' : 'Reog Ponorogo',
        'imgSource' : 'http://backpackerjakarta.com/wp-content/uploads/2017/03/reog-ponorogo.jpg'
    },
    {
        'name' : 'Calon Arang',
        'imgSource' : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Satua_Calonarang_performance_by_AyuBulan_Legong_Dance_Group%2C_International_Conference_on_Feminism%2C_2016-09-24_02.jpg'
    },
    {
        'name' : 'Angklung',
        'imgSource' : 'https://cdn-brilio-net.akamaized.net/news/2015/09/11/17107/50601-budaya-1.jpg'
    },
    {
        'name' : 'Tari Pendet',
        'imgSource' : 'https://cdn-brilio-net.akamaized.net/news/2015/09/11/17107/50604-1000xauto-budaya-4.jpg'
    },
]

const food = [
    {
        'name' : 'Rendang',
        'imgSource' : 'https://www.bango.co.id/gfx/recipes/temp_thumb-1658299943.jpg'
    },
    {
        'name' : 'Sate',
        'imgSource' : 'https://img.inews.co.id/media/800/files/inews_new/2023/01/06/Bumbu_Sate_Madura.jpg'
    },
    {
        'name' : 'Soto Kudus',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/1-dc6d1d7abd001b466f99fcd70fae3139.jpg'
    },
    {
        'name' : 'Tude Bakar - Manado',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/2-cc8381e10f52fafd8e77a97c5a2842ad.jpg'
    },
    {
        'name' : 'Tempoyak Ikan Patin - Jambi',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/3-f40f66dc16621630383e9918d5a52eff.jpg'
    },
    {
        'name' : 'Asinan Betawi',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/4-ddcd4de74b0b5b29813aaaa92994528d.jpg'
    },
    {
        'name' : 'Kerak Telor - Jakarta',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/5-20b320676a5442f607555ea8c84a1cf3.jpg'
    },
    {
        'name' : 'Nasi Campur Bali',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/6-10424e2e3f9659fc0bb4274326bd31dc.jpg'
    },
    {
        'name' : 'Pempek Palembang',
        'imgSource' : 'https://cdn.idntimes.com/content-images/post/20160718/9-069ee9bcc36ed9454e520339daa21c69.jpg'
    },
]


let div, img, p, bold = null;

const changeCategory = (category, classId) => {
    for(let i=0; i<category.length; i++) {
        div = document.createElement('div');
        img = document.createElement('img');
        p = document.createElement('p');
        bold = document.createElement('b');
        
        div.className = 'image-name'
        img.src = category[i].imgSource;

        let text = null;
        if(classId == 'cities') {
            text = document.createTextNode(category[i].city);
        } else {
            text = document.createTextNode(category[i].name);
        }

        bold.appendChild(text);
        p.appendChild(bold);
        div.appendChild(img);
        div.appendChild(p);
        document.getElementById(classId).appendChild(div);
    }
}

changeCategory(cities, 'cities')
changeCategory(culture, 'budaya')
changeCategory(food, 'kuliner')