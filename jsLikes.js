var numLikes1 = 3 

function updateLikeCount(likeElement)
{
    var thisLikeCount = document.getElementById(likeElement)
    numLikes1 += 1
    thisLikeCount.innerHTML = numLikes1 + " like(s)"
}

// var element = document.getElementById('numLikes1')
// element.onclick = updateLikeCount(likeElement)

body.onload = "javascript:updateLikeCount('numlikes1'); return false;"