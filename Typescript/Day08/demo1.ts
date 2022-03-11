
//Array Of Object
let arrObj=[
  {
    id:9,
    fname:'Sumit',
    lname:'Raokhande',
    country:{
      cid:1,
      cname:'India'
    },
    month:['Jan','Feb','March'],
    result:[
      {
        sub:'M1',
        marks:40
      },
      {
        sub:'M2',
        marks:45
      },
      {
        sub:'M3',
        marks:65
      }
    ]
  },
  {
    id:6,
    fname:'Kiran',
    lname:'Raokhande',
    country:{
      cid:2,
      cname:'US'
    },
    month:['April','May','Dec'],
    result:[
      {
        sub:'M1',
        marks:50
      },
      {
        sub:'M2',
        marks:65
      },
      {
        sub:'M3',
        marks:85
      }
    ]
  },
  {
    id:3,
    fname:'Spruha',
    lname:'Raokhande',
    country:{
      cid:3,
      cname:'Japan'
    },
    month:['June','Sept','Oct'],
    result:[
      {
        sub:'M1',
        marks:55
      },
      {
        sub:'M2',
        marks:42
      },
      {
        sub:'M3',
        marks:75
      }
    ]
  }
]

for (let i = 0; i < arrObj.length; i++) {
 
    console.log(`
      First Name  ::${arrObj[i].fname}
      Last Name   ::${arrObj[i].lname}
      ID          ::${arrObj[i].id}
    Country Name  ::${arrObj[i].country.cname}  
      Month       ::${arrObj[i].month.join(' ')}
    `);
    for(let j=0;j<arrObj[i].result.length;j++){
    console.log(`---------------Result----------
      Subject     ::${arrObj[i].result[j].sub}
      Marks       ::${arrObj[i].result[j].marks}
    `)


    }


}