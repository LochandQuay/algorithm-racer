import React from 'react';

const LeaderboardScore = ({type, score, username, speed, golf, code}) => {

  return (
    <li>
      {type}
      <h6>{score}</h6>
      <div className="leaderboard-item-hover">
        Author: {username}<br />
        Speed: {speed}<br />
        Golf Score: {golf}<br />
      </div>
      <div className='leaderboard-item-code'>
        {code}
      </div>
    </li>
  );
};

export default LeaderboardScore;
