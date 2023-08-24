export const usePositions = () => {
const positions = {
    M: {
      key: "M",
      name: "Manager",
      description: "Manager"
    },
    OH: {
      key: "OH",
      name: "Outside Hitter",
      aka: "Outside, Pin, Left Side",
      description: "An outside hitter hits and blocks from the left side of the court. Normally, they also carry the responsibilities of passing and playing defense when they get to the back row. The outside typically gets the most sets, especially when the setter is out of system, due to the fact that the outside set is one of the easier options to set. An outside’s responsibilities include hitting from the front and back row, passing in serve receive, playing left or middle-back defense, and blocking."
    },
    OPP: {
      key: "OPP",
      name: "Opposite Hitter",
      aka: "Pin, Right Side",
      description: "Opposite hitters earned that title because they are opposite to the strong (left) side hitter, meaning they hit behind the setter. In a 6-1, just like an outside hitter, an opposite has the option to play all the way around, passing, playing defense, and hitting out of the back row. An opposite’s responsibilities include swinging from the front and back row, playing right-back defense, and blocking the other team’s outside hitter."
    },
    DS: {
      key: "DS",
      name: "Defensive Specialist",
      description: "Much like a libero, a defensive specialist plays in the back row and is responsible for playing defense and receiving serve. Unlike the libero, they do not wear different colored jerseys and are required to abide by the normal substitution rules, meaning they are only in for three out of the six rotations."
    },
    MH: {
      key: "MH",
      name: "Middle Hitter",
      aka: "MB, Middle Hitter, Middle",
      description: "Middle blockers are the team’s best blockers, and they hit mostly fast-tempo sets from the middle of the court and behind the setter. Typically the libero goes in for the middle when he or she rotates to the back row. Middle sets are some of the most difficult to set and require good passes, therefore middles often get the fewest sets but have the best hitting percentages."
    },
    S: {
      key: "S",
      name: "Setter",
      description: "A setter’s primary responsibility is to take the second ball and set it up for one of the hitters to attack. Often referred to as the quarterback, the setter is the decision maker of the team and is in charge of leading the offense. In a 6-1, the setter plays all the way around, meaning that he or she has defensive responsibilities, as well as blocking duties when in the front row. A setter’s responsibilities include setting the ball on the second contact to the hitters on the court, directing the offense, playing right-back defense, and blocking the other team’s outside hitter."
    },
    L: {
      key: "L",
      name: "Libero",
      description: "Liberos wear a jersey of a different color and play in the back row five out the six rotations, usually subbing in for both middle blockers. When the libero comes in for another player, it does not count as a substitution. Liberos are defensive and serve-receive specialists who are typically fast and are able to change direction quickly. Liberos are not permitted to attack the ball from above the height of the net, and they can only overhand set a front-row attacker from behind the 10-foot line."
    },
    SS: {
      key: "SS",
      name: "Serving Specialist",
      description: "A serving specialist is a player who subs in just to serve. These players typically have a very tough or very consistent serve, and they come in for a player who is less strong behind the service line, but otherwise very valuable to have on the court as an offensive or defensive threat."
    },
    HC: {
      key: "HC",
      name: "Head Coach",
      description: "Head Coach"
    },
    AC: {
      key: "AC",
      name: "Assistant Coach",
      description: "Assistant Coach"
    }
  }

return positions

}