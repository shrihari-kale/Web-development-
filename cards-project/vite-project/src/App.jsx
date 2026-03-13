import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card';

const App = () =>{
 
  const jobOpenings = [
    {
      brandLogo:
        "https://th.bing.com/th?q=Google+Logo+White+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      nameOfCompany: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 2500, // per hour in ₹
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      nameOfCompany: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 3200,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://logowik.com/content/uploads/images/apple-black8038.jpg",
      nameOfCompany: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 3000,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://logo-marque.com/wp-content/uploads/2021/11/Meta-Embleme.jpg",
      nameOfCompany: "Meta",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 2200,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://th.bing.com/th/id/OIP.y3xqW7Rk3Da2goGn2H0ZLwHaEV?w=250&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      nameOfCompany: "Netflix",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 3500,
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://th.bing.com/th/id/OIP.zq-DhDIq95BIbP8XagovJAHaFj?w=224&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      nameOfCompany: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 3300,
      location: "Noida, India",
    },
    {
      brandLogo:
        "data:image/webp;base64,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",
      nameOfCompany: "Tesla",
      datePosted: "6 weeks ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 4000,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://th.bing.com/th/id/OIP.b89ZeunLZqJCZGFVGNeKygHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      nameOfCompany: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 4500,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://th.bing.com/th/id/OIP.cH2Z8mTkVJuwjX-Yip88fgHaHa?w=167&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      nameOfCompany: "Adobe",
      datePosted: "12 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 2700,
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.wbt_7DXd4voBHjXNQ_3KCgHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3",
      nameOfCompany: "Uber",
      datePosted: "9 weeks ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 2100,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "data:image/webp;base64,UklGRuoOAABXRUJQVlA4IN4OAACQVgCdASqfAQoBPp1MokylpCMlpRJY6LATiWNu4XKQ/p6/5TuHL59v/uX7sf2v3rq7/ef7J5r+7eLL63e8f9b/G+2D/I+p3zB/G09Sv/h9Cv/D9Ej/q+rb0G+l49IDzWP/Xft/YDwhfwv+04aT498LdpX0YfeeyTs5/gPECdr2gXePwEtS9U7849gP+b/5/1kv9ny+Hoj9nFQdcPGZNd2D7TAfgyAVF8fREWylRfH0OiZVG4u2ZFZHbo/ZxUHZFspUXx7ThBWjjCVHOGWBqdkWylRfH0RFC2xDb4JNn/dyL4bEXx9ERbKVF8fPNCmQ/sip/+upz/86Dsi2UqL49riBlidTIZdcmL3zoOyLZSovjIFNliQVOLFYSQTHw2YvI0d7novj6Ii2UqLJskd1tPGLPgLgpenZ7ZmK65LItB2RbKVF7GQtfs4HTxuwJT60OTxQ0aTd0QNTsi2UqL1pwFEdz0RE9pZaDLEexCuEWirGnpZoGp2RbKVBhXg+PBUWP08bTAS/La+56x0BT1P/cujEUWg7InRsKI8sJo+jCiHay5cSYemtAsYzT/Og7ItjjClRiaCMBJ/nH22yYGxcGIaCqwDMPHP1VaLQdkWxlVJRbZiHkqIHYOZGVq1sO0/OoAqthVHrD+VNuLD6Ii2UnrX1k4UvqdbjsTHps3ToWPuAOPfqqtLnMVAR36hKMvzTczNYJ1lt6WXLqENA4kYXNADwv6ZFoOyLTYCuVPokMibsTSR33Y0UYccGgaYnXuw5OeMvm4sepIkqp9wbBzM6Y+G2pTaCiSfgH6Da2WARvB0oSd4y1mMsb6WTTAcTKs5/6c5JcXa+XSsERRaDrgWy5CPN+2RrI8VHqZk/QqX9lsAFGOLkJAmZpWFmsgFP+IAN7LEXjwhPrqeZdv6bOpfYJW/BNbz7I+BomHtP0WfwAAD+/vWgUXzbIrtWAHoYxmnInMSdVFVzusHT0xUmQz4PKPwLaAQ4Dz++DtzrsvLLTzPsi1u/ANRfM8V0EyVlUURAIAySMLzkJKC2sDQwZnOEJASNrK25chw+swfyW4/fjEAuiBhseXZTZodtdQFCh5u621Wpm520xWN7DDfsnoaYwPs55UmDOtFU3gz8RK2+MBegVAuwAAjIA8IJhSbhhg6OICoK+0bb0B1RA+0xXrttnWp+zVfdbqG6LdWMV49XwRkKiAbIWedJpnR8CjYWTSMoNuZ7tvbeoV0XTcAA3vlQr8BHO6EVpBCIsd6zd91Vn7ubYf3ub/KLtxpfwEgUKmAgj4B39TNGAW0kZ3Rv6aqDmNmWpMUMe+XqMBYCWy+elgjI0IfO4UaEX8w5eFAtOenP4gEncS4xGc0zLqNupNg3XY1ODIEcNSCAPwABGf+Ye/pRSu2+I5aONcQKV7w/6agWSoptLVF0Iud7L6tNZugAWSczYXmbcwR9z7gZ1yJ8GKi5xEyxfiAgeLkPphpWbdb6hNCKSUNawBM4o1WNsVeAGtvImNir7wjweoIKpsnjv3cQxvORVRfC6nJpKAs48yRI3iWV0d7tcEuNqPqA8nPuhsL2x4YerZ3T/ZtZic0eu14EvNh2jhQ4EF2T+Vd5U0Avt8BtbmrFOWOhHL/BD3MjcPsAA88K2F1uyitsKdbIwisinuHCs37lYtH5uAHbPN0H8vlivY37g8AJwJMvC874Psj6BX5BBGXI1TgW5MKeKCXK9hcZW5AEqE2HplhphCFhpMYDOQ2avg4ms+SwoZzYi69KiR88hHdahj/FotL9bSuXcIr3EiPc9/O+9k7+oS5a65nVb4ic2JQGBRyTeyMuZeimBF4fcBwLzkZTaoWI68MwRR1b2IhnXdvtFgVYxNnT4W+nUkW1GPYk7czRJvul45s9UQCbZ3poEX/YxQQuRvZS7kjGfERgv20yFQ7ZlvQSTdBwQ8ixTwMhvIcOUEnS/Jk0HB0C7wIjZzAGJgNTdiISn3DKSAYoz3ETFFnFg1oLNbH3h2fatj3IGUqFVtYjZmylaD+XyxW8zbT0PUhocIjN4dfSF3BryBFFCM990qUWQZUnSyDA2YgvoOrrJBJcDnfcN93rBoYcQds0dMcqQ/N/V1jSzhDx8HZDTHJBEQb2Dde81DQ4NQaamvPJ5kDvLms3faGyf3PKeDt41mpGuidv0QwON4DFBAWCraJ90fbPKy/N4vUTizI1uoUDqqrltowvifC0nDzcW78YMVR9gPjpO5UxSDOiBKdzpWDZLNGZP3cTfG4zrFW8R/cp1xYz3jnHaJ2bWBncFxhEOXluxeqzKONa6Qm3rx1CTN2Z794oSi12354gAuRm4P0NFH8+ejEGjTLLbf4N+5WNf+4QZisuPbAlWvYUO75I2xaQhktW6PV8NA5LFssMSdqlTCgDTbyyHC4HiU+Hsui6UVGrqU135Udl9LguBergXm8GDE1bJyQ+fwQZUG9Amd0D+ZWQag01ThjtRcgyDZ4EomYD+vPVYDOgmV9+r5tELl9AYHGFNacSInD7o+2fRuVoQol/rVpMjSkEEbCmRyD3xzMsrF3jAbGAR4ZjgiWZq5ImSk0ytlhxlJVCWhfU8e7TrijbwgkEXm8odABOTNt0BENqKnSMWCthLqB65M1d9ofPXmIh+2Xoxe9YzvcBEds+nIFdxiVh7JL8jT9wXGWV5DZxD0AIooOy8NjgFHDBOYL7sWX3izbmWhw8mZt2Bei0rguVPIhOYGCY3363Qs/p0kJ4zY9IT0AQuCTmENTOvJuzEvHSAvZyMofmEfaIPLK+cEWhZHQQ5K1gErt1G0UYhMnZNMgwPYQZqkrPqQ0MlvgVZ9ZA3wswU0pUaiP7BNo+DA3BB+74vhrfyFf34PMZYYnXrG7S3ywiK8KHpCwzLgFHKQ2fCnB/yYeS/4ct5VWUDG9vfn0doD9U8OAdBoQVae4CrpqT2fr8a2j2OvqZOv5+UFXxYzQ4z///DJcn8iYSjC7fMCWZ3NzJwCN3+gZzGC+R7agPBsHO8nE8+gBLyiU+Rr+qnEIDJ3qkk8JoxSXRba6q4IU7l4zj3mqhz6oRx+UBL8alArf/L1HWqxlKrKLuc4zecGtFCWQOWaiOHzsIpOGHK8EWeAt8Rb6EpcVn7ljNUAojsdI6Z2iNEuc5FclPlv5il/HmE7r78H3tckeZD751RHhjScUEs/LnGWyj25JBVxEpnLBXYfyujU1MaZO9KK1YMl77sssxI3149kUPtotfCahwcIIPpl7Mr3kEacsJpro5K8El0OgsTyC4h3hYMqeB5fuCuY2MyLpYIO0Fe7n4oeu7l4mrjsT40cSYHwFRl0kKgQTB0JB8fh9AH7rl+M6Y2TXMwScZf6TN4sdWYVzEY0AYpz87E0RY4jnl4a62NFfF5udhkkbF5ENvvZCJfOU3tYpuR2P/UafKmvSueC2t7Uh5h+O98PsO/h7OA1Ko0fAYc+Kdy2DPjz4KKoW9Oy2WH5YGBanKzZ089WNtvREB4jjWIujWJK/oncgPVdpba8kTAwdjbSK4g0+hHrIpeBJegVPO7vxyHZK/uApUH6VH5GqYN9yVywuhUDnF5b+5Z/jVOkhmvL6TQP2KpAYEpRsx+yzopF0lkqv59394CvOfvobJYQLaH4GBh0afmHdneMBWyCjB3vVu++OTcFWJtmshT7Q+RYC774ZsHn/klUp17RxxgpSPkJDNAdEFc3o64KovMhfBwdpbC4gJ6AtTExxRoXH/KjhreSnmykgpwEzdJ/u6K6kKdcPttgBku4jag+QkpOTtqk6jX84daJA2zlnFeuIIRhn75F6rwkb3j3eBL6Kp42tPB4/76X380pavFKAPb6Jn+PwQSDEDRqxqTG9PfofHnocLHfgfTgXccMBXS42mKR+PMsu6W3IJNNVJdvoI++uqmFKWytAdp678bZOumroOcr0TDDiZu9jLo4fL+J1GPmuHab8bl2P7r5LbKQ5elx/itDGkO/4/5HDouGJJzfTQdt3lL9XRqzNv0OuN/qdE+qewNtydCyPY2YImwmClWShTWk4ysbWVL5ZFWJe3ZfyOTJPV8HZ+0jyDEg0vEufzZvp3RVpDTj/lyqxGr3gJI28dEQ8PCRN0H3/C2dnPWabKfF9a9SKP6mYXgfbjfQ50tJ6rzBiIvuh7KORIQy7q3yTw9J8m/cJT5W8HS3/xkLZy+OlMhNM19DlJd0DpJ+dH43P9ZiN+DFGBHN7gQr+6Uq/sBteDnHdTDA2Vzw4MZ43PLZpgjdql3sJJqsmEJVtysRJlZtEB0FYgO6NoRAtKChbqTeJZCCdV2pjwLYmmQ25voOPmLYNw9uQp9ZydMwfYXLC7LjX3hS9RP7VD4xcUXZGFh2mQzaJGWRXAqLuY0UUO+MfoH5knO8Xg2WWQaoR4Muysj0Aa+Y/xS4ISBdn2pUXE91mh0H2A/EvvBVO36TiNJ3u4/C6SA54QDnXj6cG+K1FY8KE3kmuWw8EpX8ETDSTEmqoJtkjlN7R4eX67oRxBnuytPhoNO7kfzk4o77wF2/rh9pVJjKz29j1l/ayAHmncUsp06ysA6V8g/Nvo8MPZkh3PMNZ6qGjlvBvVbsPYxXaLdBHDjRI291KAkfAE1gUeMp6nbZaNMILG9dW8Hl6LyV8Y5hTARNnJ4aZsJ+TFCAAPSe72NyBLHLi6RJ3iStiwaCdUzCXytRjHkTz6IrEyOv2XE1hL/F0LpUkMOsSqInbfhEywo/eCKSxmCfVthVzK7DO38q4nkAl/S4WKl4OoV252rt4m7kqUjnsORhq8QWqBDxZUmonAyZqcXgXPdJqowsGFtL1TGmHvvxDEC5BEJvqEnTPTVKDqPGde2ivP98nDUk7L4COoyg0r74xBx6OxH6hmo9UjOD6w+3pqGdm/nn6zRoQZM6cvxMJ3hMYLfZIpVCgLn6gz/HuGgGzQFE+V1vQyvwYZO7D6dSofei+0YL9ek1dD6MgGeoXFq6Ht5/yo03PrcLjpSDE5Dx8QXbsA8bnIrarQ2mPBIrfmJJdAthREV3ByR+itb+noNzMk/co3sPnUUa7joRlitvUHgFZnxxMtXrOHD262TjObvsmn273Vvu/liTxb4AAAAA==",
      nameOfCompany: "Atlassian",
      datePosted: "3 weeks ago",
      post: "FullStack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 2100,
      location: "Bengaluru, India",
    },
    {
      brandLogo:"https://th.bing.com/th?q=Ey+PNG&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      nameOfCompany: "EY",
      datePosted: "4 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 2100,
      location: "Mumbai, India",
    },
  ];

 return (
   <div className="parent">
     {jobOpenings.map(function(elem,idx){

      return (
        <div key={idx}>  {/* har ek element ko react uniqly identify kr paye isliye key use*/}
         <Card
          Company={elem.nameOfCompany}
          brandLogo={elem.brandLogo}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
        </div>
      );
     })}
   </div>
 );
}
export default App

 