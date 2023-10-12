import React from 'react'
import "./GuideData.css";

export default function GuideData(props) {
  return (
    <div>
      <div class="guide-card">
        <div class="guide-img"><img src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt=""/></div>
        <p >
        <i class="fa-brands fa-square-facebook guide-icons"></i>
        <i class="fa-brands fa-instagram guide-icons"></i>
        <i class="fa-brands fa-twitter guide-icons"></i>
        </p>
        <h2>{props.name}</h2>
        <span>Founder </span>
        </div>
    </div>
  )
}
