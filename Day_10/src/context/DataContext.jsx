import {createContext,useEffect,useState} from 'react';
import api from '../api/Post'
import { useNavigate } from 'react-router-dom';
const DataContext = createContext()
export const DataProvider = ({children}) => {
    const[num,SetNum]=useState(100)
     const[posts,setPosts]=useState([])
  const[search,Setsearch]=useState([])
  const[searchResult,setSearchResult]=useState([])
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
  const navigate=useNavigate()
  //fetching data from json server
  //load only once
  useEffect(()=>{

    const fetchData=async()=>
    {
      const res=await api.get("/feedback");
      // console.log(res.data)
      setPosts(res.data)
    }

    fetchData()
   },[])
   useEffect(()=>{
    const filteredResults=posts.filter((post)=>(post.title).includes(search));
    // const filtered=posts.filter((post)=>(post.title).toLowerCase().includes(search.toLowerCase()));
    setSearchResult(filteredResults);
   },[posts,search])

   const handleSubmit=(e)=>{
    e.preventDefault();
    const id=(posts.length)?String((Number(posts[posts.length-1].id)+1)):(1);
    const datetime=new Date().toLocaleString();
    const newObj={id,title,datetime,body};
    api.post("/feedback",newObj);
    const newList=[...posts,newObj]
    setPosts(newList);
    setTitle('');
    setBody('');
    alert("Data Insertion Success...")
    navigate("/")
   }
   const handleDelete=async(id)=>{
    try{
      await api.delete(`/feedback/${id}`);
      alert("Deletion Success...")
      const newList=posts.filter((post)=>post.id!=id);
      setPosts(newList)
      navigate("/")
    }
    catch(error)
    {
      console.log(error)
    }
   }
  return (
    <DataContext.Provider value={{num,SetNum,posts,setPosts,search,Setsearch,searchResult,setSearchResult,title,setTitle,body,setBody,handleSubmit,handleDelete}}>
        {children}
    </DataContext.Provider>
  )

}
export default DataContext