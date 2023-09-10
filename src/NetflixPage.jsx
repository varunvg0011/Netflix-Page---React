import * as React from 'react';
import { Typography } from 'antd';
import PlayArrowIcon  from '@mui/icons-material/PlayArrow';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from '@mui/material/Button';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { IconButton, CardMedia, CardContent, Card, AppBar, Toolbar, styled, alpha, Grid, Box, Select, MenuItem, FormControl} from '@mui/material';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import parse from 'html-react-parser';
import { CardActionArea, Autocomplete, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';




const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));










//fetch genres dynamically






class NetflixPage extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      season: [],
      isLoading:true,
      seasonNo: 1,
      SeasonWiseEpisodeData:[],
      sortByWhat:["Episode", "Name"],
      sortByDefaultValue:"Episode",
      episodeSearch:""
  }
}
//for of : to iterate object
//forin : to iterate array

componentDidMount(){
    fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes")
    .then(res=>res.json())
    .then(nextRes=> {
            
        this.setState({data:nextRes})
        //logic to get the unique season number from nextRes
        //remeber to never use state variable data immediately after being set as it
        //takes time to set
        

        //This code block will show error of season being undefined
         /* for (const seasonNo of this.state.data._embedded.episodes) {
          if(!this.state.season.includes(seasonNo["season"])){
           this.state.season.push(seasonNo["season"])
          }
        } */
        
        
        //this logic is to get unique season numbers to be displayed in our season dropdown
        let tempArr=[]
        for (const seasonNo of nextRes._embedded.episodes) {
          if(!tempArr.includes(seasonNo["season"])){
           tempArr.push(seasonNo["season"])
          }
        }
        this.setState({season:tempArr})

        //This below logic is for loading season 1 data as default on page load
        tempArr=[]
        for (const season of nextRes._embedded.episodes) {
          if(season["season"]==1){
            tempArr.push(season)
          }
          
        }

        


        this.setState({SeasonWiseEpisodeData:tempArr})

        this.setState({isLoading:false})

        }
    ).catch()
}

/* handleSeasonChange=(e)=>{
  this.setState({seasonNo:e.target.value})
} */

handleSeasonChange=(e)=>{
  this.setState({seasonNo:e.target.value})
  //we are not setting the below value with seasonNo and instead we are using
  //e.target.value for fetching the selected season no as setState don't set the value immediately
  this.setState({isLoading:true,function () {
    console.log(this.state.value)}})
  //now we want the seasons to be filtered according to e.target.value
  let tempSeasonArr=[]
  for (const season of this.state.data._embedded.episodes) {
    if(season["season"]==e.target.value){
      tempSeasonArr.push(season)
    }
  }
  this.setState({SeasonWiseEpisodeData:tempSeasonArr})
  this.setState({isLoading:false})
}


handleSortingOrderChange=(e)=>{
  this.setState({sortByDefaultValue: e.target.value})
  let sortby =e.target.value 
  let seasonsToSort = this.state.SeasonWiseEpisodeData

  if(sortby.toLowerCase() == 'name'){
      seasonsToSort.sort((a,b) => {
        if(a.name< b.name){
          return -1
        }
        else if(a.name> b.name){
          return 1
        }
        else{
          return 0;
        }
      })
    }
    else{
      seasonsToSort.sort((a,b) => {
        if(a.number< b.number){
          return -1
        }
        else if(a.number> b.number){
          return 1
        }
        else{
          return 0;
        }
      })
    }

    this.setState({SeasonWiseEpisodeData:seasonsToSort})
  }


  
  

  handleEpisodeSelect=(value)=>{
    var searchedEpisode=[]
    if(value!='' || value!=null){
      this.setState({episodeSearch:value})
      // for (const episode of this.state.data._embedded.episodes) {
      //   if(episode.name == value){
      //     searchedEpisode.push(episode)
      //   }
      // }

      searchedEpisode = this.state.SeasonWiseEpisodeData
                        .filter((ep)=>{return ep.name == value} );
    }
    this.setState({SeasonWiseEpisodeData:searchedEpisode})
  }

  render(){
    return <>
    {
      this.state.isLoading==false?

    <Box container style={{
      backgroundImage:`url(https://static.tvmaze.com/uploads/images/original_untouched/166/416516.jpg)`,    
      backgroundSize:"cover",
      backgroundRepeat:"repeat",
      height:"400vh",
      width:"auto",
      //filter:"blur(4px)",     
      position: "absolute",      
      textalign:"center"
          
        }}>          
          <Box id="PageBox">

            <Box id="navbar" /*style={{position:"sticky"}}*/ alignItems={"center"} sx={{ flexGrow: 1}}>
              <AppBar display="flex" sx={{color:"white"}}>
                <Toolbar variant="dense" >
                  <LiveTvSharpIcon sx={{display:{xs:"block", fontSize: "large", mr:"2vw"}}}/>
                  <Button sx={{display:{xs:"none", sm:"block"}, color:"white"}}>{this.state.data.webChannel.name}
                  </Button>
                  <Button sx={{color:"white", ml:"1vw"}}>Home</Button>
                  <Button sx={{color:"white"}}>TV shows</Button>
                  <Button sx={{color:"white"}}>Movies</Button>
                  <Button sx={{color:"white"}}>Kids</Button>
                  {/* <Search style={{marginLeft:"30%"}}>
                    <SearchIconWrapper>
                      <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" 
                    inputProps={{ ...params.InputProps,
                            type: 'search' }}/>
                  </Search> */}
                  <Autocomplete
                   freeSolo                                                       
                   id="free-solo-2-demo"
                   disableClearable
                   sx={{ width: "20vw"}}
                   onChange={(event, newValue) => {
                    console.log(event,newValue)
                    this.handleEpisodeSelect(newValue)
                  }}
                  value={this.state.episodeSearch}

                   //value={this.state.episodeSearch}
                   options={this.state.SeasonWiseEpisodeData.map((option) => option.name)}
                   renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search Episodes..."
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                   )}/>
                   
                  
                </Toolbar>
              </AppBar>
            </Box>

            <Box id="TopHalfBox" alignItems={"center"} sx={{fontSize:"small"}}>
              <Grid  container spacing={2} margin="9vw 5vw 2vw 5vw" alignItems="center">                
                <Grid id="NameOfSeries" item md={12} lg={12} sm={12} xs={12} >
                      <Box sx={{ color:"white",fontWeight:'bold',fontSize: 'h6.fontSize'}}>
                      {this.state.data.name} 
                      </Box>
                </Grid>  
                <Grid id="SelectSeasonsDropdown" item md={1.7} lg={1.7} sm={3} xs={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">                   
                    <Select
                        id="SelectSeasons"                      
                        label="Season"
                        value={this.state.seasonNo}
                        sx={{backgroundColor:"grey", color:"white"}}
                        onChange={this.handleSeasonChange}>
                        {
                          this.state.season.map(ele=>{
                            return <MenuItem value={ele}>Season {ele}</MenuItem>
                          })
                        }                      
                    </Select>
                  </FormControl>
                </Grid>
                <Grid id="YearOfRelease" item md={9} lg={10} sm={9} xs={9}>                      
                      <Box sx={{ color:"white",fontWeight:'light',fontSize: 'default'}}>
                      ({this.state.data.premiered.substring(0,4)})
                      </Box>               
                </Grid>
                
                <Grid id="PlayButton" item md={2} lg={2} sm={3} xs={3.7}>
                  <Button fontcolor="white" sx={{height:"auto",width:"auto", fontSize:"12px"}} variant="contained">
                    <PlayArrowIcon fontSize="medium"/>
                    {/* <Typography fontSize="small" color="text" >Episode 9 Watch Again</Typography> */}
                    Episode 9 Watch Again
                  </Button>
                </Grid>

                <Grid id="AddButton" item md={.5} lg={.5} sm={1} xs={1} >                
                    <IconButton aria-label="add" color='primary'><ControlPointIcon fontSize='large'/></IconButton>            
                </Grid>

                <Grid id="DownloadButton" item md={2} lg={5} sm={3} xs={3}>      
                  <IconButton aria-label="download" color="primary">
                    <DownloadForOfflineOutlinedIcon fontSize='large'/>               
                  </IconButton>          
                </Grid>

                <Grid id="Summary" item md={8} lg={8} sm={8} xs={12}>
                  <Box flex={2} sx={{color:"white", fontSize:"medium"}}>
                    {/* <Typography fontSize="small">{this.state.data.summary}</Typography> */}
                    {parse(this.state.data.summary)}
                    </Box>        
                </Grid>

              </Grid>                 
            </Box>


            <Box id="BottomHalfBox" style={{bordertop:0}}  margin>
              <Grid id="TVSeriesInfo" marginLeft={"5vw"} container sx={{      
                alignItems:"center",
                fontSize:"small", fontWeight:"bold"       
              }}>
                <Grid id="Genre" item md={2} sm={3} xs={4} lg={2}>
                  <Box sx={{color:"white"}}>Genres:</Box>
                </Grid>
                {/* display for multiple data */}
                <Grid id="GenreDetails" item md={10} sm={9} xs={8} lg={10}>
                  <Box sx={{color:"white"}}>{this.state.data.genres[0] + ", " + this.state.data.genres[1] + ", " + this.state.data.genres[2]}</Box>
                </Grid>

                <Grid id="Language" item md={2} sm={3} xs={4} lg={2}>
                  <Box sx={{color:"white"}}>Language:</Box>
                </Grid>
                
                {/* display for multiple data */}
                <Grid id="LanguageDetails" item md={10} sm={9} xs={8} lg={10}>
                  <Box sx={{color:"white"}}>{this.state.data.language}</Box>
                </Grid>
                
              </Grid>
            </Box>  

               
            <Box id="EpisodeCards" backgroundColor="#041E42" textAlign="center">
              <Stack>
                <Box id="SelectSortOrderBox" textAlign={"right"} style={{marginTop:"2vw"}}>
                  <FormControl size="small" style={{width:"5vw", height:"auto", marginRight:"2vw"}}>                   
                    <Select
                      id="SelectOrderOfSorting"                      
                      label="Sort By"
                      value={this.state.sortByDefaultValue}
                      sx={{backgroundColor:"grey", color:"white", width:"auto"}}               
                      onChange={this.handleSortingOrderChange}>
                        {
                          this.state.sortByWhat.map(ele=>{
                            return <MenuItem value={ele}>{ele}</MenuItem>
                          })
                        } 
                    </Select>
                  </FormControl>
                </Box>
              {
                this.state.SeasonWiseEpisodeData.map(e=>{
                  return <Box style={{width:"70vw", paddingTop:"5vh", margin:"auto", paddingBottom:"5vh"}} >
                      <Card style={{marginTop:"5vh"}}>
                      <CardActionArea >
                        <Box id="EpisodeDetails" backgroundColor="#585858">
                          <Stack direction={"row"} spacing={1}>
                            <CardMedia
                              component="img"
                              height="auto"
                              image={e["image"].medium}
                              style={{width:200}}
                            />
                            
                              <CardContent>
                                <Box>
                                  <Stack direction="row">
                                    <IconButton aria-label="play">
                                      <PlayCircleFilledIcon color='primary' size="large" />
                                    </IconButton>
                                    <Typography variant="caption" component="div" style={{textDecorationLine:"underline", textUnderlinePosition:"under", marginTop:".8em"}}>
                                      S.{e["season"]} E.{e["number"]} - {e["name"]}
                                    </Typography>                                                                                                      
                                  </Stack>
                                  <Typography variant="body2">
                                      {parse(e["summary"])}
                                  </Typography>
                                </Box>
                              </CardContent>                                                           
                            </Stack>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Box>
                  })
                }
              </Stack>
            </Box>

          </Box>                                          
    </Box>                    
          :
          <Box id="LoadingProgress">
            <CircularProgress />
          </Box>
        }
    </>
  }

}
export default NetflixPage;