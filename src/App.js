import {useState,useEffect} from 'react';
import AddMovie from "./Components/AddMovie";
import "./App.css";
import MovieList from './Components/MovieList.js';
import Filtring from './Components/Filtring.js';

const info = [
  { title:'jankariwa', img:'https://i0.wp.com/www.flashgist.com.ng/wp-content/uploads/2021/12/bukunmioluwasina_20211220_1.jpg?fit=1080%2C1350&ssl=1', description:"Once upon a time, Aking had an uncommon wish, which was to live forever.He became the mysterious answer to Abike's Children's question. Find out more.", posterURL:"www.jankariwa.com", rating:9.4 },
  { title:'Elesinoba', img:'https://i0.wp.com/entzhood.com.ng/wp-content/uploads/2022/10/Elesin-Oba-2022-%E2%80%93-Nollywood-Movie.jpg?fit=380%2C562&ssl=1', description:"Inspired by true life events, in the Oyo Empire in the 1940's, Elesin Oba, the king's chief horseman, succumbs to the lure of beauty and sexual desire on the very evening he is set to die in order to fulfil his lifelong debt of ritual suicide to accompany the dead Alaafin to the realm of the ancestors, he derails from a very important generational and spiritual transaction. This sets in motion a series of catastrophic consequences, in a spell-binding film of emotions, humour, and tragic role reversals that puts ancient beliefs and customs on trial in an ever increasingly post-modern and Western world.", posterURL:"www.elesinoba.com", rating:9.3 },
  { title:'77Bullets', img:'https://www.365trendies.com.ng/wp-content/uploads/2020/05/157726544670755242861167327651522512025064269300496.jpg', description:"he life of a lady who chooses crime as her daily work but nemesis soon catches up with her. #77Bullets #MercyAigbe.", posterURL:"www.77bullets.com", rating:8.5 },
  { title:'Elebute', img:'https://an24.net/wp-content/uploads/2022/04/IMG-20220414-WA0022.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"www.elebute.com", rating:9.4 },
  { title:'Son of Mercy', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE84bHa9qtlOCSB1DDx6CR2-f-DdSMoRc2vQ&usqp=CAU', description:"In a city ruled by fear, a notorious kingpin (Amuda Eko) with supernatural abilities reigns supreme, using his powers to control the criminal underworld and crush any who dare to oppose him. But when a powerful force determined to bring him down to his knees emerges ,  he finds himself facing the fight of his life as  the two sides clash in this thrilling action packed yoruba movie.", posterURL:"www.sonofmercy.com", rating:8.3 },
  { title:'ainiwa', img:'https://m.media-amazon.com/images/M/MV5BNDNkNzNmZjctODEzNC00NGQxLWI0OGQtZTU0MTk1N2MyMGQ5XkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_.jpg', description:"A woman lacks good manners but claims she's not blessed with a good home. A story of a hot tempered housewife who embarrasses her husband with her overbearing attitude until she learn in a hard.", posterURL:"www.ainiwa.com", rating:6.9 },
  { title:'The Lucifer 2', img:'https://abegnaijamusic.files.wordpress.com/2020/03/84729-0wmhhk.jpg', description:"In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.", posterURL:"www.lucifer2.com", rating:8.5 },
  { title:'Saworoide', img:'https://everyevery.ng/wp-content/uploads/2020/05/Saworoide-image.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:8.2 },
  { title:'Emi Alaise', img:'https://i.ytimg.com/vi/4VszXcG0P04/hqdefault.jpg', description:"Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.", posterURL:"www.emialaise.com", rating:8.1 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;
