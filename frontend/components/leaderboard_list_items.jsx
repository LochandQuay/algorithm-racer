import React from 'react';

const LeaderboardScore = ({type, score, username, speed, golf, idx}) => {

  return (
    <li>
      {type}
      <h6>{score}</h6>
      <div className="leaderboard-item-hover">
        Author: {username}<br />
        Speed: {speed}<br />
        Golf Score: {golf}
      </div>
    </li>
  );
};

export default LeaderboardScore;
