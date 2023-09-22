<template>
    <div class="flex flex-col gap-4">
      <!-- <InfoMentee v-if="mentee" :mentee="mentee" /> -->
      <form

        class="flex flex-col lg:mx-auto lg:items-center gap-2 p-2 rounded-md bg-zinc-200 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl shadow-md w-full"
      >
        <h1 class="text-2xl font-bold uppercase">New Meeting</h1>
        <input
          type="date"
          name="date_field"
          :max="new Date().toISOString().split(`T`)[0]"
          class="p-2 rounded-md w-48 lg:w-72"
        />
        <h2 class="text-xl font-bold">Discussion:</h2>
        <textarea name="discussion_field" class="p-2 rounded-md w-48 lg:w-72" />
        <button
          type="submit"
          class="bg-nitMaroon-600 text-white rounded-md p-2 w-12"
        >
          Add
        </button>
  
        <div style="padding:0;margin:none;overflow-x: hidden;position: absolute; top:0;left:50%;transform:translate(-50%,0)">
          <!-- first page -->
          <div
            id="p1"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg1Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg1" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="1/1.svg"
                type="image/svg+xml"
                id="pdf1"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_1" class="t s1_1"
                >NATIONAL INSTITUTE OF TECHNOLOGY, TIRUCHIRAPALLI
              </span>
              <span id="t2_1" class="t s1_1"
                >TIRUCHIRAPALLI, TAMILNADU-620015
              </span>
              <span id="t3_1" class="t s1_1">STUDENT INFORMATION FORM </span>
              <span id="t4_1" class="t s2_1">FACULTY ADVISOR DETAILS </span>
              <span id="t7_1" class="t s4_1">Name </span>
              <span id="t8_1" class="t s3_1"
                ><input
                  style="height: 100%; width: 100%"
                  type="text"
                  placeholder="(in BLOCK letters)"
                />
              </span>
              <span id="t9_1" class="t s4_1">Designation </span>
              <span id="ip_1" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ta_1" class="t s4_1">Contact Number </span>
              <span id="ip_3" class="t s3_1"
                ><input style="height: 100%; width: 100%" type="text" />
              </span>
              <span id="t9_1" class="t s4_1">Designation </span>
              <span id="tb_1" class="t s4_1">Department </span>
              <span id="ip_2" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ta_1" class="t s4_1">Contact Number </span>
              <span id="tb_1" class="t s4_1">Department </span>
              <span id="tc_1" class="t s2_1">DETAILS OF STUDENT </span>
              <span id="td_1" class="t s4_1">Name </span>
              <span id="te_1" class="t s3_1">
                <input
                  style="height: 100%; width: 100%"
                  type="text"
                  placeholder="(in BLOCK letters)"
              /></span>
              <span id="tf_1" class="t s4_1">Roll Number </span>
              <span id="ip_4" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_40" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="file"
              /></span>
  
              <span id="tg_1" class="t s4_1">Department/Section </span>
              <span id="ip_8" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="th_1" class="t s4_1">Period of Study </span>
              <span id="ip_5" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
  
              <span id="ti_1" class="t s4_1">Blood Group </span>
              <span id="ip_9" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ta_1" class="t s4_1">Contact Number </span>
              <span id="tj_1" class="t s4_1">Mobile Number </span>
              <span id="tk_1" class="t s4_1">Date of Birth </span
              ><span id="tl_1" class="t s5_1">(DD/MM/YY) </span>
              <span id="ip_11" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="date"
              /></span>
              <span id="tm_1" class="t s4_1">WhatsApp Number </span>
              <span id="tn_1" class="t s4_1">Gender </span>
              <span id="ip_10" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="to_1" class="t s4_1">E-mail ID </span>
              <span id="ip_12" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="email"
              /></span>
              <span id="tp_1" class="t s2_1">DETAILS OF PARENTS </span>
              <span id="tq_1" class="t s4_1">Father Name </span>
              <span id="ip_13" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="tr_1" class="t s4_1">Mother Name </span>
              <span id="ip_18" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ts_1" class="t s4_1">Occupation </span
              ><span id="tt_1" class="t s4_1">Occupation </span>
              <span id="ip_19" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_14" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="tu_1" class="t s4_1">Mobile Number </span
              ><span id="tv_1" class="t s4_1">Mobile Number </span>
              <span id="ip_15" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_20" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="tu_1" class="t s4_1">Mobile Number </span
              ><span id="tv_1" class="t s4_1">Mobile Number </span>
              <span id="ip_6" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="tw_1" class="t s4_1">WhatsApp Number </span
              ><span id="tx_1" class="t s4_1">WhatsApp Number </span>
              <span id="ip_7" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_16" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_21" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ty_1" class="t s4_1">E-mail ID </span
              ><span id="tz_1" class="t s4_1">E-mail ID </span>
              <span id="ip_17" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_18" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_22" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t10_1" class="t s4_1"> </span
              ><span id="t11_1" class="t s4_1"> </span>
              <span id="ip_23" class="t s4_1"
                ><input
                  style="height: 100%; width: 100%"
                  type="text"
                  placeholder="Address for Correspondence (with pin code)"
              /></span>
              <span id="ip_24" class="t s4_1"
                ><input
                  style="height: 100%; width: 100%"
                  type="text"
                  placeholder="Permanent Address (with pin code)"
              /></span>
              <span id="t12_1" class="t s2_1">ACADEMIC QUALIFICATION(S) </span>
              <span id="t13_1" class="t s2_1">Degree/Examination </span
              ><span id="t14_1" class="t s2_1">Institution/Board of Study </span>
              <span id="t15_1" class="t s2_1">Year(s) of Study </span>
              <span id="ip_28" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t16_1" class="t s2_1">CGPA/Percentage </span>
              <span id="ip_29" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_30" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_31" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t17_1" class="t s4_1">SSLC (10 </span>
              <span id="t18_1" class="t s6_1">th </span>
              <span id="t19_1" class="t s4_1">) </span>
              <span id="ip_25" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t12_1" class="t s2_1">ACADEMIC QUALIFICATION(S) </span>
              <span id="t1a_1" class="t s4_1">HSC (12 </span>
              <span id="t1b_1" class="t s6_1">th </span>
              <span id="t1c_1" class="t s4_1">) </span>
              <span id="ip_26" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1d_1" class="t s4_1">JEE Rank </span
              ><span id="t1e_1" class="t s4_1">Score </span>
              <span id="ip_27" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="ip_32" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1d_1" class="t s4_1">JEE Rank </span
              ><span id="t1e_1" class="t s4_1">Score </span>
              <span id="t1f_1" class="t s2_1">ACHIEVEMENTS </span>
              <span id="t1g_1" class="t s4_1">Positions of Responsibility </span>
              <span id="ip_33" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1d_1" class="t s4_1">JEE Rank </span
              ><span id="t1e_1" class="t s4_1">Score </span>
              <span id="t1h_1" class="t s4_1">Scholarships </span>
              <span id="ip_34" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1i_1" class="t s4_1">Competitions </span>
              <span id="ip_35" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1j_1" class="t s4_1">Special Talents </span>
              <span id="ip_36" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1k_1" class="t s4_1">Role Model </span>
              <span id="ip_37" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1l_1" class="t s4_1"
                >Short Term and Long term objectives
              </span>
              <span id="ip_38" class="t s4_1"
                ><input style="height: 100%; width: 100%" type="text"
              /></span>
              <span id="t1m_1" class="t s4_1">Extra-Curricular Activities </span>
            </div>
            <span id="ip_39" class="t s4_1"
              ><input style="height: 100%; width: 100%" type="text"
            /></span>
            <!-- End text definitions -->
          </div>
  
          <div
            id="p2"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg2Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg2" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="2/2.svg"
                type="image/svg+xml"
                id="pdf2"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_2" class="t s1_2">Semester </span
              ><span id="t2_2" class="t s1_2">I </span
              ><span id="t3_2" class="t s1_2">Academic Year </span
              ><span id="t4_2" class="t s1_2">Hostel &amp; Room No </span>
              <span id="t5_2" class="t s1_2">Sl. No. </span
              ><span id="t6_2" class="t s1_2">Subject Code &amp; Name </span
              ><span id="t7_2" class="t s1_2">Grade Obtained </span>
              <span id="t8_2" class="t s2_2">1 </span>
              <input type="text" id="sc1" />
              <input type="text" id="go1" />
  
              <span id="t9_2" class="t s2_2">2 </span>
              <input type="text" id="sc2" />
              <input type="text" id="go2" />
  
              <span id="ta_2" class="t s2_2">3 </span>
              <input type="text" id="sc3" />
              <input type="text" id="go3" />
  
              <span id="tb_2" class="t s2_2">4 </span>
              <input type="text" id="sc4" />
              <input type="text" id="go4" />
  
              <span id="tc_2" class="t s2_2">5 </span>
              <input type="text" id="sc5" />
              <input type="text" id="go5" />
  
              <span id="td_2" class="t s2_2">6 </span>
              <input type="text" id="sc6" />
              <input type="text" id="go6" />
  
              <span id="te_2" class="t s2_2">7 </span>
              <input type="text" id="sc7" />
              <input type="text" id="go7" />
  
              <span id="tf_2" class="t s2_2">8 </span>
              <input type="text" id="sc8" />
              <input type="text" id="go8" />
  
              <span id="tg_2" class="t s2_2">9 </span>
              <input type="text" id="sc9" />
              <input type="text" id="go9" />
  
              <span id="th_2" class="t s1_2">TOTAL CREDITS: </span>
              <input type="number" id="tc1" />
              <span id="ti_2" class="t s1_2">GPA: </span>
              <input type="number" id="gpa1" />
              <span id="tj_2" class="t s1_2">CGPA: </span>
              <input type="number" id="cgpa1" />
              <span id="tk_2" class="t s1_2">Semester </span
              ><span id="tl_2" class="t s1_2">II </span
              ><span id="tm_2" class="t s1_2">Academic Year </span
              ><span id="tn_2" class="t s1_2">Hostel &amp; Room No </span>
              <span id="to_2" class="t s1_2">Sl. No. </span
              ><span id="tp_2" class="t s1_2">Subject Code &amp; Name </span
              ><span id="tq_2" class="t s1_2">Grade Obtained </span>
              <span id="tr_2" class="t s2_2">1 </span>
              <input type="text" id="sc12" />
              <input type="text" id="go12" />
              <span id="ts_2" class="t s2_2">2 </span>
              <input type="text" id="sc22" />
              <input type="text" id="go22" />
              <span id="tt_2" class="t s2_2">3 </span>
              <input type="text" id="sc32" />
              <input type="text" id="go32" />
              <span id="tu_2" class="t s2_2">4 </span>
              <input type="text" id="sc42" />
              <input type="text" id="go42" />
              <span id="tv_2" class="t s2_2">5 </span>
              <input type="text" id="sc52" />
              <input type="text" id="go52" />
              <span id="tw_2" class="t s2_2">6 </span>
              <input type="text" id="sc62" />
              <input type="text" id="go62" />
              <span id="tx_2" class="t s2_2">7 </span>
              <input type="text" id="sc72" />
              <input type="text" id="go72" />
              <span id="ty_2" class="t s2_2">8 </span>
              <input type="text" id="sc82" />
              <input type="text" id="go82" />
              <span id="tz_2" class="t s2_2">9 </span>
              <input type="text" id="sc92" />
              <input type="text" id="go92" />
              <span id="t10_2" class="t s1_2">TOTAL CREDITS: </span>
              <input type="number" id="tc2" />
              <span id="t11_2" class="t s1_2">GPA: </span>
              <input type="number" id="gpa2" />
              <span id="t12_2" class="t s1_2">CGPA: </span>
              <input type="number" id="cgpa2" />
  
              <input type="number" id="tc1" />
              <span id="t13_2" class="t s1_2"
                >Review meeting with Faculty Advisor
              </span>
              <span id="t14_2" class="t s1_2">Date </span
              ><span id="t15_2" class="t s1_2">Time </span
              ><span id="t16_2" class="t s1_2">Remarks/Comments </span>
              <input type="text" id="d1" />
              <input type="text" id="t1" />
              <input type="text" id="r1" />
  
              <input type="text" id="d2" />
              <input type="text" id="t2" />
              <input type="text" id="r2" />
  
              <input type="text" id="d3" />
              <input type="text" id="t3" />
              <input type="text" id="r3" />
  
              <input type="text" id="d4" />
              <input type="text" id="t4" />
              <input type="text" id="r4" />
  
              <input type="text" id="d5" />
              <input type="text" id="t5" />
              <input type="text" id="r5" />
  
              <input type="text" id="d6" />
              <input type="text" id="t6" />
              <input type="text" id="r6" />
  
              <span id="t17_2" class="t s1_2">Workshop/Internship/In- </span>
              <span id="t18_2" class="t s1_2"
                >plant/Conference/Journal Publication
              </span>
              <input type="text" id="inbox1" />
              <input type="text" id="inbox2" />
              <input type="text" id="inbox3" />
              <input type="text" id="inbox4" />
              <input type="text" id="inbox5" />
  
              <span id="t19_2" class="t s1_2">Academic Achievements </span>
              <span id="t1a_2" class="t s1_2">Clubs, Sports, Fests etc. </span>
              <span id="t1b_2" class="t s1_2"
                >Disciplinary actions (if any)
              </span>
            </div>
            <!-- End text definitions -->
          </div>
  
          <div
            id="p3"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg4Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg4" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="4/4.svg"
                type="image/svg+xml"
                id="pdf4"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_4" class="t s1_4">Semester </span
              ><span id="t2_4" class="t s1_4">V </span
              ><span id="t3_4" class="t s1_4">Academic Year </span
              ><span id="t4_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="t5_4" class="t s1_4">Sl. No. </span
              ><span id="t6_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="t7_4" class="t s1_4">Grade Obtained </span>
              <span id="t8_4" class="t s2_4">1 </span>
              <input type="text" id="sc51" />
              <input type="text" id="grd51" />
              <span id="t9_4" class="t s2_4">2 </span>
              <input type="text" id="sc52" />
              <input type="text" id="grd52" />
              <span id="ta_4" class="t s2_4">3 </span>
              <input type="text" id="sc53" />
              <input type="text" id="grd53" />
              <span id="tb_4" class="t s2_4">4 </span>
              <input type="text" id="sc54" />
              <input type="text" id="grd54" />
              <span id="tc_4" class="t s2_4">5 </span>
              <input type="text" id="sc55" />
              <input type="text" id="grd55" />
              <span id="td_4" class="t s2_4">6 </span>
              <input type="text" id="sc56" />
              <input type="text" id="grd56" />
              <span id="te_4" class="t s2_4">7 </span>
              <input type="text" id="sc57" />
              <input type="text" id="grd57" />
              <span id="tf_4" class="t s2_4">8 </span>
              <input type="text" id="sc58" />
              <input type="text" id="grd58" />
              <span id="tg_4" class="t s2_4">9 </span>
              <input type="text" id="sc59" />
              <input type="text" id="grd59" />
              <span id="th_4" class="t s1_4">TOTAL CREDITS: </span
              ><input type="number" id="tot5" /><span id="ti_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g5" /><span id="tj_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg5" />
              <span id="tk_4" class="t s1_4">Semester </span
              ><span id="tl_4" class="t s1_4">VI </span
              ><span id="tm_4" class="t s1_4">Academic Year </span
              ><span id="tn_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="to_4" class="t s1_4">Sl. No. </span
              ><span id="tp_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="tq_4" class="t s1_4">Grade Obtained </span>
              <span id="tr_4" class="t s2_4">1 </span>
              <input type="text" id="sc61" />
              <input type="text" id="grd61" />
              <span id="ts_4" class="t s2_4">2 </span>
              <input type="text" id="sc62" />
              <input type="text" id="grd62" />
              <span id="tt_4" class="t s2_4">3 </span>
              <input type="text" id="sc63" />
              <input type="text" id="grd63" />
              <span id="tu_4" class="t s2_4">4 </span>
              <input type="text" id="sc64" />
              <input type="text" id="grd64" />
              <span id="tv_4" class="t s2_4">5 </span>
              <input type="text" id="sc65" />
              <input type="text" id="grd65" />
              <span id="tw_4" class="t s2_4">6 </span>
              <input type="text" id="sc66" />
              <input type="text" id="grd66" />
              <span id="tx_4" class="t s2_4">7 </span>
              <input type="text" id="sc67" />
              <input type="text" id="grd67" />
              <span id="ty_4" class="t s2_4">8 </span>
              <input type="text" id="sc68" />
              <input type="text" id="grd68" />
              <span id="tz_4" class="t s2_4">9 </span>
              <input type="text" id="sc69" />
              <input type="text" id="grd69" />
              <span id="t10_4" class="t s1_4">TOTAL CREDITS: </span>
              <input type="number" id="tot6" /><span id="t11_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g6" /><span id="t12_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg6" />
              <span id="t13_4" class="t s1_4"
                >Review meeting with Faculty Advisor
              </span>
              <span id="t14_4" class="t s1_4">Date </span>
              <input type="text" id="date1" />
              <input type="text" id="date2" />
              <input type="text" id="date3" />
              <input type="text" id="date4" />
              <input type="text" id="date5" />
              <input type="text" id="date6" />
              <span id="t15_4" class="t s1_4">Time </span>
              <input type="text" id="time1" />
              <input type="text" id="time2" />
              <input type="text" id="time3" />
              <input type="text" id="time4" />
              <input type="text" id="time5" />
              <input type="text" id="time6" />
              <span id="t16_4" class="t s1_4">Remarks/Comments </span>
              <input type="text" id="rnc1" />
              <input type="text" id="rnc2" />
              <input type="text" id="rnc3" />
              <input type="text" id="rnc4" />
              <input type="text" id="rnc5" />
              <input type="text" id="rnc6" />
              <span id="t17_4" class="t s1_4">Workshop/Internship/In- </span>
              <input type="text" id="wit" />
              <span id="t18_4" class="t s1_4"
                >plant/Conference/Journal Publication
              </span>
              <span id="t19_4" class="t s1_4">Academic Achievements </span>
              <input type="text" id="acad" />
              <span id="t1a_4" class="t s1_4">Clubs, Sports, Fests etc. </span>
              <input type="text" id="club" />
              <span id="t1b_4" class="t s1_4"
                >Disciplinary actions (if any)
              </span>
            </div>
            <input type="text" id="disp" />
            <!-- End text definitions -->
          </div>
  
          <div
            id="p4"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg4Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg4" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="4/4.svg"
                type="image/svg+xml"
                id="pdf4"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_4" class="t s1_4">Semester </span
              ><span id="t2_4" class="t s1_4">V </span
              ><span id="t3_4" class="t s1_4">Academic Year </span
              ><span id="t4_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="t5_4" class="t s1_4">Sl. No. </span
              ><span id="t6_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="t7_4" class="t s1_4">Grade Obtained </span>
              <span id="t8_4" class="t s2_4">1 </span>
              <input type="text" id="sc51" />
              <input type="text" id="grd51" />
              <span id="t9_4" class="t s2_4">2 </span>
              <input type="text" id="sc52" />
              <input type="text" id="grd52" />
              <span id="ta_4" class="t s2_4">3 </span>
              <input type="text" id="sc53" />
              <input type="text" id="grd53" />
              <span id="tb_4" class="t s2_4">4 </span>
              <input type="text" id="sc54" />
              <input type="text" id="grd54" />
              <span id="tc_4" class="t s2_4">5 </span>
              <input type="text" id="sc55" />
              <input type="text" id="grd55" />
              <span id="td_4" class="t s2_4">6 </span>
              <input type="text" id="sc56" />
              <input type="text" id="grd56" />
              <span id="te_4" class="t s2_4">7 </span>
              <input type="text" id="sc57" />
              <input type="text" id="grd57" />
              <span id="tf_4" class="t s2_4">8 </span>
              <input type="text" id="sc58" />
              <input type="text" id="grd58" />
              <span id="tg_4" class="t s2_4">9 </span>
              <input type="text" id="sc59" />
              <input type="text" id="grd59" />
              <span id="th_4" class="t s1_4">TOTAL CREDITS: </span
              ><input type="number" id="tot5" /><span id="ti_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g5" /><span id="tj_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg5" />
              <span id="tk_4" class="t s1_4">Semester </span
              ><span id="tl_4" class="t s1_4">VI </span
              ><span id="tm_4" class="t s1_4">Academic Year </span
              ><span id="tn_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="to_4" class="t s1_4">Sl. No. </span
              ><span id="tp_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="tq_4" class="t s1_4">Grade Obtained </span>
              <span id="tr_4" class="t s2_4">1 </span>
              <input type="text" id="sc61" />
              <input type="text" id="grd61" />
              <span id="ts_4" class="t s2_4">2 </span>
              <input type="text" id="sc62" />
              <input type="text" id="grd62" />
              <span id="tt_4" class="t s2_4">3 </span>
              <input type="text" id="sc63" />
              <input type="text" id="grd63" />
              <span id="tu_4" class="t s2_4">4 </span>
              <input type="text" id="sc64" />
              <input type="text" id="grd64" />
              <span id="tv_4" class="t s2_4">5 </span>
              <input type="text" id="sc65" />
              <input type="text" id="grd65" />
              <span id="tw_4" class="t s2_4">6 </span>
              <input type="text" id="sc66" />
              <input type="text" id="grd66" />
              <span id="tx_4" class="t s2_4">7 </span>
              <input type="text" id="sc67" />
              <input type="text" id="grd67" />
              <span id="ty_4" class="t s2_4">8 </span>
              <input type="text" id="sc68" />
              <input type="text" id="grd68" />
              <span id="tz_4" class="t s2_4">9 </span>
              <input type="text" id="sc69" />
              <input type="text" id="grd69" />
              <span id="t10_4" class="t s1_4">TOTAL CREDITS: </span>
              <input type="number" id="tot6" /><span id="t11_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g6" /><span id="t12_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg6" />
              <span id="t13_4" class="t s1_4"
                >Review meeting with Faculty Advisor
              </span>
              <span id="t14_4" class="t s1_4">Date </span>
              <input type="text" id="date1" />
              <input type="text" id="date2" />
              <input type="text" id="date3" />
              <input type="text" id="date4" />
              <input type="text" id="date5" />
              <input type="text" id="date6" />
              <span id="t15_4" class="t s1_4">Time </span>
              <input type="text" id="time1" />
              <input type="text" id="time2" />
              <input type="text" id="time3" />
              <input type="text" id="time4" />
              <input type="text" id="time5" />
              <input type="text" id="time6" />
              <span id="t16_4" class="t s1_4">Remarks/Comments </span>
              <input type="text" id="rnc1" />
              <input type="text" id="rnc2" />
              <input type="text" id="rnc3" />
              <input type="text" id="rnc4" />
              <input type="text" id="rnc5" />
              <input type="text" id="rnc6" />
              <span id="t17_4" class="t s1_4">Workshop/Internship/In- </span>
              <input type="text" id="wit" />
              <span id="t18_4" class="t s1_4"
                >plant/Conference/Journal Publication
              </span>
              <span id="t19_4" class="t s1_4">Academic Achievements </span>
              <input type="text" id="acad" />
              <span id="t1a_4" class="t s1_4">Clubs, Sports, Fests etc. </span>
              <input type="text" id="club" />
              <span id="t1b_4" class="t s1_4"
                >Disciplinary actions (if any)
              </span>
            </div>
            <input type="text" id="disp" />
            <!-- End text definitions -->
          </div>
  
          <div
            id="p4"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg4Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg4" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="4/4.svg"
                type="image/svg+xml"
                id="pdf4"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_4" class="t s1_4">Semester </span
              ><span id="t2_4" class="t s1_4">V </span
              ><span id="t3_4" class="t s1_4">Academic Year </span
              ><span id="t4_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="t5_4" class="t s1_4">Sl. No. </span
              ><span id="t6_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="t7_4" class="t s1_4">Grade Obtained </span>
              <span id="t8_4" class="t s2_4">1 </span>
              <input type="text" id="sc51" />
              <input type="text" id="grd51" />
              <span id="t9_4" class="t s2_4">2 </span>
              <input type="text" id="sc52" />
              <input type="text" id="grd52" />
              <span id="ta_4" class="t s2_4">3 </span>
              <input type="text" id="sc53" />
              <input type="text" id="grd53" />
              <span id="tb_4" class="t s2_4">4 </span>
              <input type="text" id="sc54" />
              <input type="text" id="grd54" />
              <span id="tc_4" class="t s2_4">5 </span>
              <input type="text" id="sc55" />
              <input type="text" id="grd55" />
              <span id="td_4" class="t s2_4">6 </span>
              <input type="text" id="sc56" />
              <input type="text" id="grd56" />
              <span id="te_4" class="t s2_4">7 </span>
              <input type="text" id="sc57" />
              <input type="text" id="grd57" />
              <span id="tf_4" class="t s2_4">8 </span>
              <input type="text" id="sc58" />
              <input type="text" id="grd58" />
              <span id="tg_4" class="t s2_4">9 </span>
              <input type="text" id="sc59" />
              <input type="text" id="grd59" />
              <span id="th_4" class="t s1_4">TOTAL CREDITS: </span
              ><input type="number" id="tot5" /><span id="ti_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g5" /><span id="tj_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg5" />
              <span id="tk_4" class="t s1_4">Semester </span
              ><span id="tl_4" class="t s1_4">VI </span
              ><span id="tm_4" class="t s1_4">Academic Year </span
              ><span id="tn_4" class="t s1_4">Hostel &amp; Room No </span>
              <span id="to_4" class="t s1_4">Sl. No. </span
              ><span id="tp_4" class="t s1_4">Subject Code &amp; Name </span
              ><span id="tq_4" class="t s1_4">Grade Obtained </span>
              <span id="tr_4" class="t s2_4">1 </span>
              <input type="text" id="sc61" />
              <input type="text" id="grd61" />
              <span id="ts_4" class="t s2_4">2 </span>
              <input type="text" id="sc62" />
              <input type="text" id="grd62" />
              <span id="tt_4" class="t s2_4">3 </span>
              <input type="text" id="sc63" />
              <input type="text" id="grd63" />
              <span id="tu_4" class="t s2_4">4 </span>
              <input type="text" id="sc64" />
              <input type="text" id="grd64" />
              <span id="tv_4" class="t s2_4">5 </span>
              <input type="text" id="sc65" />
              <input type="text" id="grd65" />
              <span id="tw_4" class="t s2_4">6 </span>
              <input type="text" id="sc66" />
              <input type="text" id="grd66" />
              <span id="tx_4" class="t s2_4">7 </span>
              <input type="text" id="sc67" />
              <input type="text" id="grd67" />
              <span id="ty_4" class="t s2_4">8 </span>
              <input type="text" id="sc68" />
              <input type="text" id="grd68" />
              <span id="tz_4" class="t s2_4">9 </span>
              <input type="text" id="sc69" />
              <input type="text" id="grd69" />
              <span id="t10_4" class="t s1_4">TOTAL CREDITS: </span>
              <input type="number" id="tot6" /><span id="t11_4" class="t s1_4"
                >GPA: </span
              ><input type="number" id="g6" /><span id="t12_4" class="t s1_4"
                >CGPA: </span
              ><input type="number" id="cg6" />
              <span id="t13_4" class="t s1_4"
                >Review meeting with Faculty Advisor
              </span>
              <span id="t14_4" class="t s1_4">Date </span>
              <input type="text" id="date1" />
              <input type="text" id="date2" />
              <input type="text" id="date3" />
              <input type="text" id="date4" />
              <input type="text" id="date5" />
              <input type="text" id="date6" />
              <span id="t15_4" class="t s1_4">Time </span>
              <input type="text" id="time1" />
              <input type="text" id="time2" />
              <input type="text" id="time3" />
              <input type="text" id="time4" />
              <input type="text" id="time5" />
              <input type="text" id="time6" />
              <span id="t16_4" class="t s1_4">Remarks/Comments </span>
              <input type="text" id="rnc1" />
              <input type="text" id="rnc2" />
              <input type="text" id="rnc3" />
              <input type="text" id="rnc4" />
              <input type="text" id="rnc5" />
              <input type="text" id="rnc6" />
              <span id="t17_4" class="t s1_4">Workshop/Internship/In- </span>
              <input type="text" id="wit" />
              <span id="t18_4" class="t s1_4"
                >plant/Conference/Journal Publication
              </span>
              <span id="t19_4" class="t s1_4">Academic Achievements </span>
              <input type="text" id="acad" />
              <span id="t1a_4" class="t s1_4">Clubs, Sports, Fests etc. </span>
              <input type="text" id="club" />
              <span id="t1b_4" class="t s1_4"
                >Disciplinary actions (if any)
              </span>
            </div>
            <input type="text" id="disp" />
            <!-- End text definitions -->
          </div>
  
          <div
            id="p6"
            style="
              overflow: hidden;
              position: relative;
              background-color: white;
              width: 909px;
              height: 1286px;
            "
          >
            <!-- Begin page background -->
            <div
              id="pg6Overlay"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
              "
            ></div>
            <div id="pg6" style="-webkit-user-select: none">
              <object
                width="909"
                height="1286"
                data="6/6.svg"
                type="image/svg+xml"
                id="pdf6"
                style="
                  width: 909px;
                  height: 1286px;
                  -moz-transform: scale(1);
                  z-index: 0;
                "
              ></object>
            </div>
            <!-- End page background -->
  
            <!-- Begin text definitions (Positioned/styled in CSS) -->
            <div class="text-container">
              <span id="t1_6" class="t s1">Redo/Reassessment Details </span>
              <span id="t2_6" class="t s1">Sl.No. </span
              ><span id="t3_6" class="t s1">Subject Code &amp; Name </span
              ><span id="t4_6" class="t s1">Month &amp; Year of Appearing </span
              ><span id="t5_6" class="t s1">Credits </span
              ><span id="t6_6" class="t s1">Grade Obtained </span>
              <input type="number" step="1" id="srl1" />
              <input type="number" step="1" id="srl2" />
              <input type="number" step="1" id="srl3" />
              <input type="number" step="1" id="srl4" />
              <input type="number" step="1" id="srl5" />
              <input type="number" step="1" id="srl6" />
              <input type="number" step="1" id="srl7" />
              <input type="number" step="1" id="srl8" />
              <input type="number" step="1" id="srl9" />
              <input type="number" step="1" id="srl10" />
  
              <input type="text" id="snc1" />
              <input type="text" id="snc2" />
              <input type="text" id="snc3" />
              <input type="text" id="snc4" />
              <input type="text" id="snc5" />
              <input type="text" id="snc6" />
              <input type="text" id="snc7" />
              <input type="text" id="snc8" />
              <input type="text" id="snc9" />
              <input type="text" id="snc10" />
  
              <input type="text" id="mny1" />
              <input type="text" id="mny2" />
              <input type="text" id="mny3" />
              <input type="text" id="mny4" />
              <input type="text" id="mny5" />
              <input type="text" id="mny6" />
              <input type="text" id="mny7" />
              <input type="text" id="mny8" />
              <input type="text" id="mny9" />
              <input type="text" id="mny10" />
  
              <input type="number" id="crd1" />
              <input type="number" id="crd2" />
              <input type="number" id="crd3" />
              <input type="number" id="crd4" />
              <input type="number" id="crd5" />
              <input type="number" id="crd6" />
              <input type="number" id="crd7" />
              <input type="number" id="crd8" />
              <input type="number" id="crd9" />
              <input type="number" id="crd10" />
  
              <input type="text" id="grd1" />
              <input type="text" id="grd2" />
              <input type="text" id="grd3" />
              <input type="text" id="grd4" />
              <input type="text" id="grd5" />
              <input type="text" id="grd6" />
              <input type="text" id="grd7" />
              <input type="text" id="grd8" />
              <input type="text" id="grd9" />
              <input type="text" id="grd10" />
  
              <span id="t7_6" class="t s1">Placement/Higher Studies details </span
              ><span id="t8_6" class="t s1"
                >Any other points/Comments by the Student
              </span>
  
              <!-- <input type="text" id="highers"> -->
              <textarea
                id="highers"
                rows="4"
                cols="50"
                style="resize: none"
              ></textarea>
              <textarea
                id="comment"
                rows="4"
                cols="50"
                style="resize: none"
              ></textarea>
  
              <span id="t9_6" class="t s1">Signature of the Student </span
              ><span id="ta_6" class="t s1">Faculty Advisor </span>
            </div>
            <!-- End text definitions -->
          </div>
        </div>
      </form>
    </div>
  </template>
  

  <!-- first page -->
  <!-- Begin shared CSS values -->
  <style class="shared-css" type="text/css">
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  .text-container {
    white-space: pre;
  }
  @supports (-webkit-touch-callout: none) {
    .text-container {
      white-space: normal;
    }
  }
  </style>
  <!-- End shared CSS values -->
  
  <!-- Begin inline CSS -->
  <style type="text/css">
  #t1_1 {
    left: 288px;
    bottom: 1242px;
    letter-spacing: -0.11px;
    word-spacing: 0.04px;
  }
  #t2_1 {
    left: 361px;
    bottom: 1222px;
    letter-spacing: -0.11px;
    word-spacing: 0.04px;
  }
  #t3_1 {
    left: 391px;
    bottom: 1203px;
    letter-spacing: -0.12px;
    word-spacing: 0.04px;
  }
  #t4_1 {
    left: 280px;
    bottom: 1153px;
    letter-spacing: 0.14px;
    word-spacing: 0.01px;
  }
  #t5_1 {
    left: 711px;
    bottom: 1072px;
    letter-spacing: 0.1px;
    word-spacing: 0.02px;
  }
  #t6_1 {
    left: 736px;
    bottom: 1046px;
    letter-spacing: 0.12px;
    word-spacing: -0.11px;
  }
  #t7_1 {
    left: 64px;
    bottom: 1125px;
    letter-spacing: 0.1px;
  }
  #t8_1 {
    left: 193px;
    bottom: 1125px;
    width: 232px;
    height: 22px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
    background-color: red;
  }
  #t9_1 {
    left: 447px;
    bottom: 1125px;
    letter-spacing: 0.1px;
  }
  #ip_1 {
    left: 540px;
    bottom: 1125px;
    letter-spacing: 0.1px;
    width: 155px;
    height: 22px;
  }
  #ip_2 {
    left: 540px;
    bottom: 1098px;
    letter-spacing: 0.1px;
    width: 155px;
    height: 22px;
  }
  #ip_3 {
    left: 193px;
    bottom: 1098px;
    width: 232px;
    height: 22px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
    background-color: red;
  }
  
  #ta_1 {
    left: 64px;
    bottom: 1098px;
    letter-spacing: 0.12px;
    word-spacing: 0.11px;
  }
  #tb_1 {
    left: 447px;
    bottom: 1098px;
    letter-spacing: 0.11px;
  }
  #tc_1 {
    left: 301px;
    bottom: 1070px;
    letter-spacing: 0.14px;
    word-spacing: 0.02px;
  }
  #td_1 {
    left: 64px;
    bottom: 1042px;
    letter-spacing: 0.1px;
  }
  #te_1 {
    left: 218px;
    bottom: 1042px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
    height: 22px;
    width: 474px;
  }
  #tf_1 {
    left: 64px;
    bottom: 1015px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_4 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 1015px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_5 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 987px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_6 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 960px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_7 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 932px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_8 {
    height: 22px;
    width: 263px;
    left: 585px;
    bottom: 1015px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_9 {
    height: 22px;
    width: 263px;
    left: 585px;
    bottom: 987px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_10 {
    height: 22px;
    width: 263px;
    left: 585px;
    bottom: 932px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_11 {
    height: 22px;
    width: 263px;
    left: 585px;
    bottom: 960px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_12 {
    height: 22px;
    width: 630px;
    left: 219px;
    bottom: 903px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_13 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 848px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_14 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 820px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_15 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 792px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_16 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 765px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_17 {
    height: 22px;
    width: 208px;
    left: 219px;
    bottom: 737px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_18 {
    height: 22px;
    width: 262px;
    left: 584px;
    bottom: 848px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_19 {
    height: 22px;
    width: 262px;
    left: 584px;
    bottom: 820px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_20 {
    height: 22px;
    width: 262px;
    left: 584px;
    bottom: 792px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_21 {
    height: 22px;
    width: 262px;
    left: 584px;
    bottom: 765px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_22 {
    height: 22px;
    width: 262px;
    left: 584px;
    bottom: 737px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_23 {
    height: 92px;
    width: 414px;
    left: 434px;
    bottom: 643px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_24 {
    height: 92px;
    width: 374px;
    left: 54px;
    bottom: 643px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_25 {
    height: 40px;
    width: 205px;
    left: 220px;
    bottom: 543px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_26 {
    height: 40px;
    width: 205px;
    left: 220px;
    bottom: 496px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_27 {
    height: 22px;
    width: 205px;
    left: 220px;
    bottom: 470px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_28 {
    height: 42px;
    width: 260px;
    left: 433px;
    bottom: 540px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_29 {
    height: 42px;
    width: 260px;
    left: 433px;
    bottom: 496px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_30 {
    height: 42px;
    width: 147px;
    left: 700px;
    bottom: 543px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_31 {
    height: 42px;
    width: 147px;
    left: 700px;
    bottom: 496px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_32 {
    height: 22px;
    width: 265px;
    left: 430px;
    bottom: 470px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_33 {
    height: 47px;
    width: 530px;
    left: 317px;
    bottom: 387px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_34 {
    height: 52px;
    width: 530px;
    left: 317px;
    bottom: 330px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_35 {
    height: 47px;
    width: 530px;
    left: 317px;
    bottom: 277px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_36 {
    height: 47px;
    width: 530px;
    left: 317px;
    bottom: 223px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_37 {
    height: 49px;
    width: 530px;
    left: 317px;
    bottom: 167px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_38 {
    height: 47px;
    width: 530px;
    left: 317px;
    bottom: 113px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #ip_39 {
    height: 47px;
    width: 530px;
    left: 317px;
    bottom: 58px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  
  #ip_40 {
    height: 140px;
    width: 155px;
    left: 700px;
    bottom: 1035px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
    z-index: 6;
  }
  
  #tg_1 {
    left: 441px;
    bottom: 1015px;
    letter-spacing: 0.11px;
  }
  #th_1 {
    left: 64px;
    bottom: 987px;
    letter-spacing: 0.11px;
    word-spacing: -0.01px;
  }
  #ti_1 {
    left: 441px;
    bottom: 987px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #tj_1 {
    left: 64px;
    bottom: 960px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #tk_1 {
    left: 441px;
    bottom: 960px;
    letter-spacing: 0.11px;
    word-spacing: -0.07px;
  }
  #tl_1 {
    left: 675px;
    bottom: 960px;
    letter-spacing: 0.14px;
  }
  #tm_1 {
    left: 64px;
    bottom: 932px;
    letter-spacing: 0.13px;
    word-spacing: 0.11px;
  }
  #tn_1 {
    left: 441px;
    bottom: 932px;
    letter-spacing: 0.08px;
  }
  #to_1 {
    left: 64px;
    bottom: 904px;
    letter-spacing: 0.1px;
    word-spacing: -0.06px;
  }
  #tp_1 {
    left: 378px;
    bottom: 877px;
    letter-spacing: 0.13px;
    word-spacing: 0.03px;
  }
  #tq_1 {
    left: 64px;
    bottom: 849px;
    letter-spacing: 0.11px;
    word-spacing: 0.12px;
  }
  #tr_1 {
    left: 441px;
    bottom: 849px;
    letter-spacing: 0.12px;
    word-spacing: 0.11px;
  }
  #ts_1 {
    left: 64px;
    bottom: 821px;
    letter-spacing: 0.11px;
  }
  #tt_1 {
    left: 441px;
    bottom: 821px;
    letter-spacing: 0.11px;
  }
  #tu_1 {
    left: 64px;
    bottom: 794px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #tv_1 {
    left: 441px;
    bottom: 794px;
    letter-spacing: 0.12px;
    word-spacing: -0.06px;
  }
  #tw_1 {
    left: 64px;
    bottom: 766px;
    letter-spacing: 0.12px;
    word-spacing: 0.11px;
  }
  #tx_1 {
    left: 441px;
    bottom: 766px;
    letter-spacing: 0.13px;
    word-spacing: 0.11px;
  }
  #ty_1 {
    left: 64px;
    bottom: 738px;
    letter-spacing: 0.1px;
    word-spacing: -0.06px;
  }
  #tz_1 {
    left: 441px;
    bottom: 738px;
    letter-spacing: 0.11px;
    word-spacing: -0.06px;
  }
  #t10_1 {
    left: 64px;
    bottom: 711px;
    letter-spacing: 0.12px;
    word-spacing: -0.03px;
  }
  #t11_1 {
    left: 441px;
    bottom: 711px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #t12_1 {
    left: 349px;
    bottom: 616px;
    letter-spacing: 0.14px;
    word-spacing: 0.13px;
  }
  #t13_1 {
    left: 64px;
    bottom: 588px;
    letter-spacing: 0.14px;
  }
  #t14_1 {
    left: 234px;
    bottom: 588px;
    letter-spacing: 0.13px;
    word-spacing: -0.08px;
  }
  #t15_1 {
    left: 511px;
    bottom: 588px;
    letter-spacing: 0.12px;
    word-spacing: 0.03px;
  }
  #t16_1 {
    left: 716px;
    bottom: 588px;
    letter-spacing: 0.15px;
  }
  #t17_1 {
    left: 64px;
    bottom: 552px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t18_1 {
    left: 122px;
    bottom: 558px;
    letter-spacing: -0.09px;
  }
  #t19_1 {
    left: 134px;
    bottom: 552px;
  }
  #t1a_1 {
    left: 64px;
    bottom: 506px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t1b_1 {
    left: 116px;
    bottom: 512px;
    letter-spacing: -0.09px;
  }
  #t1c_1 {
    left: 128px;
    bottom: 506px;
  }
  #t1d_1 {
    left: 64px;
    bottom: 469px;
    letter-spacing: 0.1px;
    word-spacing: -0.05px;
  }
  #t1e_1 {
    left: 441px;
    bottom: 469px;
    letter-spacing: 0.07px;
  }
  #t1f_1 {
    left: 399px;
    bottom: 441px;
    letter-spacing: 0.14px;
  }
  #t1g_1 {
    left: 64px;
    bottom: 404px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1h_1 {
    left: 64px;
    bottom: 349px;
    letter-spacing: 0.1px;
  }
  #t1i_1 {
    left: 64px;
    bottom: 294px;
    letter-spacing: 0.11px;
  }
  #t1j_1 {
    left: 64px;
    bottom: 239px;
    letter-spacing: 0.11px;
    word-spacing: 0.02px;
  }
  #t1k_1 {
    left: 64px;
    bottom: 185px;
    letter-spacing: 0.11px;
    word-spacing: -0.06px;
  }
  #t1l_1 {
    left: 64px;
    bottom: 130px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1m_1 {
    left: 64px;
    bottom: 75px;
    letter-spacing: 0.11px;
    word-spacing: -0.06px;
  }
  
  .s1_1 {
    font-size: 17px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s2_1 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s3_1 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #a6a6a6;
  }
  .s4_1 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #000;
  }
  .s5_1 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #a6a6a6;
  }
  .s6_1 {
    font-size: 10px;
    font-family: Cambria_m;
    color: #000;
  }
  
  @font-face {
    font-family: Cambria-Bold_i;
    src: url("fonts/Cambria-Bold_i.woff") format("woff");
  }
  
  @font-face {
    font-family: Cambria_m;
    src: url("fonts/Cambria_m.woff") format("woff");
  }
  
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  .text-container {
    white-space: pre;
  }
  @supports (-webkit-touch-callout: none) {
    .text-container {
      white-space: normal;
    }
  }
  
  #t1_2 {
    left: 64px;
    bottom: 1202px;
    letter-spacing: 0.12px;
  }
  #t2_2 {
    left: 146px;
    bottom: 1202px;
  }
  #t3_2 {
    left: 330px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t4_2 {
    left: 586px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #t5_2 {
    left: 75px;
    bottom: 1181px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #t6_2 {
    left: 299px;
    bottom: 1181px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #t7_2 {
    left: 676px;
    bottom: 1181px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #t8_2 {
    left: 92px;
    bottom: 1159px;
  }
  #t9_2 {
    left: 92px;
    bottom: 1138px;
  }
  #ta_2 {
    left: 92px;
    bottom: 1117px;
  }
  #tb_2 {
    left: 92px;
    bottom: 1095px;
  }
  #tc_2 {
    left: 92px;
    bottom: 1074px;
  }
  #td_2 {
    left: 92px;
    bottom: 1053px;
  }
  #te_2 {
    left: 92px;
    bottom: 1031px;
  }
  #tf_2 {
    left: 92px;
    bottom: 1010px;
  }
  #tg_2 {
    left: 92px;
    bottom: 989px;
  }
  #th_2 {
    left: 171px;
    bottom: 967px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #ti_2 {
    left: 420px;
    bottom: 967px;
    letter-spacing: 0.12px;
  }
  #tj_2 {
    left: 581px;
    bottom: 967px;
    letter-spacing: 0.18px;
  }
  #tk_2 {
    left: 64px;
    bottom: 925px;
    letter-spacing: 0.12px;
  }
  #tl_2 {
    left: 146px;
    bottom: 925px;
    letter-spacing: 0.04px;
  }
  #tm_2 {
    left: 330px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #tn_2 {
    left: 586px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #to_2 {
    left: 75px;
    bottom: 904px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #tp_2 {
    left: 299px;
    bottom: 904px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #tq_2 {
    left: 676px;
    bottom: 904px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #tr_2 {
    left: 92px;
    bottom: 882px;
  }
  #ts_2 {
    left: 92px;
    bottom: 861px;
  }
  #tt_2 {
    left: 92px;
    bottom: 840px;
  }
  #tu_2 {
    left: 92px;
    bottom: 818px;
  }
  #tv_2 {
    left: 92px;
    bottom: 797px;
  }
  #tw_2 {
    left: 92px;
    bottom: 776px;
  }
  #tx_2 {
    left: 92px;
    bottom: 754px;
  }
  #ty_2 {
    left: 92px;
    bottom: 733px;
  }
  #tz_2 {
    left: 92px;
    bottom: 711px;
  }
  #t10_2 {
    left: 171px;
    bottom: 690px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #t11_2 {
    left: 420px;
    bottom: 690px;
    letter-spacing: 0.12px;
  }
  #t12_2 {
    left: 581px;
    bottom: 690px;
    letter-spacing: 0.18px;
  }
  #t13_2 {
    left: 325px;
    bottom: 425px;
    letter-spacing: 0.13px;
    word-spacing: -0.03px;
  }
  #t14_2 {
    left: 99px;
    bottom: 374px;
    letter-spacing: 0.13px;
  }
  #t15_2 {
    left: 200px;
    bottom: 374px;
    letter-spacing: 0.1px;
  }
  #t16_2 {
    left: 498px;
    bottom: 374px;
    letter-spacing: 0.14px;
  }
  #t17_2 {
    left: 70px;
    bottom: 617px;
    letter-spacing: 0.14px;
  }
  #t18_2 {
    left: 70px;
    bottom: 611px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t19_2 {
    left: 70px;
    bottom: 574px;
    letter-spacing: 0.13px;
    word-spacing: -0.02px;
  }
  #t1a_2 {
    left: 70px;
    bottom: 533px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1b_2 {
    left: 70px;
    bottom: 492px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
  }
  
  #sc1 {
    position: absolute;
    top: 107px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc2 {
    position: absolute;
    top: 129px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc3 {
    position: absolute;
    top: 150px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc4 {
    position: absolute;
    top: 171px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc5 {
    position: absolute;
    top: 192px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc6 {
    position: absolute;
    top: 213px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc7 {
    position: absolute;
    top: 234px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc8 {
    position: absolute;
    top: 255px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc9 {
    position: absolute;
    top: 276px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  
  #go1 {
    position: absolute;
    top: 107px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go2 {
    position: absolute;
    top: 129px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go3 {
    position: absolute;
    top: 150px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go4 {
    position: absolute;
    top: 171px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go5 {
    position: absolute;
    top: 192px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go6 {
    position: absolute;
    top: 213px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go7 {
    position: absolute;
    top: 234px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go8 {
    position: absolute;
    top: 255px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go9 {
    position: absolute;
    top: 276px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  
  /* sem2 inputs */
  
  #sc12 {
    position: absolute;
    top: 384px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc22 {
    position: absolute;
    top: 406px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc32 {
    position: absolute;
    top: 427px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc42 {
    position: absolute;
    top: 448px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc52 {
    position: absolute;
    top: 469px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc62 {
    position: absolute;
    top: 490px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc72 {
    position: absolute;
    top: 511px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc82 {
    position: absolute;
    top: 532px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  #sc92 {
    position: absolute;
    top: 553px;
    left: 157px;
    z-index: 3;
    width: 418px;
    height: 12px;
  }
  
  #go12 {
    position: absolute;
    top: 384px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go22 {
    position: absolute;
    top: 406px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go32 {
    position: absolute;
    top: 427px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go42 {
    position: absolute;
    top: 448px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go52 {
    position: absolute;
    top: 469px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go62 {
    position: absolute;
    top: 490px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go72 {
    position: absolute;
    top: 511px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go82 {
    position: absolute;
    top: 532px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  #go92 {
    position: absolute;
    top: 553px;
    left: 650px;
    z-index: 3;
    width: 160px;
    height: 12px;
  }
  
  /* credit */
  #tc1 {
    position: absolute;
    top: 299px;
    left: 295px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  #gpa1 {
    position: absolute;
    top: 299px;
    left: 459px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  #cgpa1 {
    position: absolute;
    top: 299px;
    left: 628px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  
  #tc2 {
    position: absolute;
    top: 576px;
    left: 295px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  #gpa2 {
    position: absolute;
    top: 576px;
    left: 459px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  #cgpa2 {
    position: absolute;
    top: 576px;
    left: 628px;
    z-index: 3;
    width: 106px;
    height: 10px;
  }
  
  /* inputboxes */
  #inbox1 {
    position: absolute;
    top: 644px;
    left: 371px;
    z-index: 3;
    width: 484px;
    height: 28px;
  }
  #inbox2 {
    position: absolute;
    top: 694px;
    left: 371px;
    z-index: 3;
    width: 484px;
    height: 28px;
  }
  #inbox3 {
    position: absolute;
    top: 734px;
    left: 371px;
    z-index: 3;
    width: 484px;
    height: 28px;
  }
  #inbox4 {
    position: absolute;
    top: 779px;
    left: 371px;
    z-index: 3;
    width: 484px;
    height: 28px;
  }
  
  #inbox5 {
    position: absolute;
    top: 840px;
    left: 328px;
    z-index: 3;
    width: 246px;
    height: 8px;
  }
  /* single entry in date,time,remarks */
  #d1 {
    position: absolute;
    top: 922px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t1 {
    position: absolute;
    top: 922px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r1 {
    position: absolute;
    top: 922px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  
  /* single entry in date,time,remarks */
  #d2 {
    position: absolute;
    top: 958px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t2 {
    position: absolute;
    top: 958px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r2 {
    position: absolute;
    top: 958px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  /* single entry in date,time,remarks */
  #d3 {
    position: absolute;
    top: 994px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t3 {
    position: absolute;
    top: 994px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r3 {
    position: absolute;
    top: 994px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  /* single entry in date,time,remarks */
  #d4 {
    position: absolute;
    top: 1030px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t4 {
    position: absolute;
    top: 1030px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r4 {
    position: absolute;
    top: 1030px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  /* single entry in date,time,remarks */
  #d5 {
    position: absolute;
    top: 1064px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t5 {
    position: absolute;
    top: 1064px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r5 {
    position: absolute;
    top: 1064px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  
  /* single entry in date,time,remarks */
  #d6 {
    position: absolute;
    top: 1105px;
    left: 74px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #t6 {
    position: absolute;
    top: 1105px;
    left: 177px;
    z-index: 3;
    width: 74px;
    height: 23px;
  }
  #r6 {
    position: absolute;
    top: 1105px;
    left: 288px;
    z-index: 3;
    width: 558px;
    height: 23px;
  }
  
  .s1_2 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s2_2 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #000;
  }
  
  @font-face {
    font-family: Cambria-Bold_i;
    src: url("fonts/Cambria-Bold_i.woff") format("woff");
  }
  
  @font-face {
    font-family: Cambria_m;
    src: url("fonts/Cambria_m.woff") format("woff");
  }
  
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  .text-container {
    white-space: pre;
  }
  @supports (-webkit-touch-callout: none) {
    .text-container {
      white-space: normal;
    }
  }
  </style>
  <!-- End shared CSS values -->
  
  <!-- Begin inline CSS -->
  <style type="text/css">
  #t1_4 {
    left: 64px;
    bottom: 1202px;
    letter-spacing: 0.12px;
  }
  #t2_4 {
    left: 146px;
    bottom: 1202px;
  }
  #t3_4 {
    left: 330px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t4_4 {
    left: 586px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #t5_4 {
    left: 75px;
    bottom: 1181px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #t6_4 {
    left: 299px;
    bottom: 1181px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #t7_4 {
    left: 676px;
    bottom: 1181px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #t8_4 {
    left: 92px;
    bottom: 1159px;
  }
  #t9_4 {
    left: 92px;
    bottom: 1138px;
  }
  #ta_4 {
    left: 92px;
    bottom: 1117px;
  }
  #tb_4 {
    left: 92px;
    bottom: 1095px;
  }
  #tc_4 {
    left: 92px;
    bottom: 1074px;
  }
  #td_4 {
    left: 92px;
    bottom: 1053px;
  }
  #te_4 {
    left: 92px;
    bottom: 1031px;
  }
  #tf_4 {
    left: 92px;
    bottom: 1010px;
  }
  #tg_4 {
    left: 92px;
    bottom: 989px;
  }
  #th_4 {
    left: 171px;
    bottom: 967px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #ti_4 {
    left: 420px;
    bottom: 967px;
    letter-spacing: 0.12px;
  }
  #tj_4 {
    left: 581px;
    bottom: 967px;
    letter-spacing: 0.18px;
  }
  #tk_4 {
    left: 64px;
    bottom: 925px;
    letter-spacing: 0.12px;
  }
  #tl_4 {
    left: 146px;
    bottom: 925px;
    letter-spacing: -0.05px;
  }
  #tm_4 {
    left: 330px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #tn_4 {
    left: 586px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #to_4 {
    left: 75px;
    bottom: 904px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #tp_4 {
    left: 299px;
    bottom: 904px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #tq_4 {
    left: 676px;
    bottom: 904px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #tr_4 {
    left: 92px;
    bottom: 882px;
  }
  #ts_4 {
    left: 92px;
    bottom: 861px;
  }
  #tt_4 {
    left: 92px;
    bottom: 840px;
  }
  #tu_4 {
    left: 92px;
    bottom: 818px;
  }
  #tv_4 {
    left: 92px;
    bottom: 797px;
  }
  #tw_4 {
    left: 92px;
    bottom: 776px;
  }
  #tx_4 {
    left: 92px;
    bottom: 754px;
  }
  #ty_4 {
    left: 92px;
    bottom: 733px;
  }
  #tz_4 {
    left: 92px;
    bottom: 711px;
  }
  #t10_4 {
    left: 171px;
    bottom: 690px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #t11_4 {
    left: 420px;
    bottom: 690px;
    letter-spacing: 0.12px;
  }
  #t12_4 {
    left: 581px;
    bottom: 690px;
    letter-spacing: 0.18px;
  }
  #t13_4 {
    left: 325px;
    bottom: 425px;
    letter-spacing: 0.13px;
    word-spacing: -0.03px;
  }
  #t14_4 {
    left: 99px;
    bottom: 374px;
    letter-spacing: 0.13px;
  }
  #t15_4 {
    left: 200px;
    bottom: 374px;
    letter-spacing: 0.1px;
  }
  #t16_4 {
    left: 498px;
    bottom: 374px;
    letter-spacing: 0.14px;
  }
  #t17_4 {
    left: 70px;
    bottom: 629px;
    letter-spacing: 0.14px;
  }
  #t18_4 {
    left: 70px;
    bottom: 611px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t19_4 {
    left: 70px;
    bottom: 574px;
    letter-spacing: 0.13px;
    word-spacing: -0.02px;
  }
  #t1a_4 {
    left: 70px;
    bottom: 533px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1b_4 {
    left: 70px;
    bottom: 492px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
  }
  
  #sc51 {
    left: 150px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc52 {
    left: 150px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc53 {
    left: 150px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc54 {
    left: 150px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc55 {
    left: 150px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc56 {
    left: 150px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc57 {
    left: 150px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc58 {
    left: 150px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc59 {
    left: 150px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #grd51 {
    left: 625px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd52 {
    left: 625px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd53 {
    left: 625px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd54 {
    left: 625px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd55 {
    left: 625px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd56 {
    left: 625px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd57 {
    left: 625px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd58 {
    left: 625px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd59 {
    left: 625px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #tot5 {
    left: 300px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g5 {
    left: 460px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg5 {
    left: 625px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #sc61 {
    left: 150px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc62 {
    left: 150px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc63 {
    left: 150px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc64 {
    left: 150px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc65 {
    left: 150px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc66 {
    left: 150px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc67 {
    left: 150px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc68 {
    left: 150px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc69 {
    left: 150px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #tot6 {
    left: 300px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g6 {
    left: 460px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg6 {
    left: 625px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #grd61 {
    left: 625px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd62 {
    left: 625px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd63 {
    left: 625px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd64 {
    left: 625px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd65 {
    left: 625px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd66 {
    left: 625px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd67 {
    left: 625px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd68 {
    left: 625px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd69 {
    left: 625px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #wit {
    position: absolute;
    left: 375px;
    bottom: 620px;
    width: 400px;
    z-index: 3;
  }
  #acad {
    position: absolute;
    left: 375px;
    bottom: 570px;
    width: 400px;
    z-index: 3;
  }
  #club {
    position: absolute;
    left: 375px;
    bottom: 530px;
    width: 400px;
    z-index: 3;
  }
  #disp {
    position: absolute;
    left: 375px;
    bottom: 480px;
    width: 400px;
    z-index: 3;
  }
  
  #date1 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 345px;
    width: 80px;
  }
  #date2 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 305px;
    width: 80px;
  }
  #date3 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 265px;
    width: 80px;
  }
  #date4 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 230px;
    width: 80px;
  }
  #date5 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 195px;
    width: 80px;
  }
  #date6 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 160px;
    width: 80px;
  }
  
  #time1 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 345px;
    width: 80px;
  }
  #time2 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 305px;
    width: 80px;
  }
  #time3 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 265px;
    width: 80px;
  }
  #time4 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 230px;
    width: 80px;
  }
  #time5 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 195px;
    width: 80px;
  }
  #time6 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 160px;
    width: 80px;
  }
  
  #rnc1 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 345px;
    width: 400px;
  }
  #rnc2 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 305px;
    width: 400px;
  }
  #rnc3 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 265px;
    width: 400px;
  }
  #rnc4 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 230px;
    width: 400px;
  }
  #rnc5 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 195px;
    width: 400px;
  }
  #rnc6 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 160px;
    width: 400px;
  }
  
  .s1_4 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s2_4 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #000;
  }
  
  @font-face {
    font-family: Cambria-Bold_i;
    src: url("fonts/Cambria-Bold_i.woff") format("woff");
  }
  
  @font-face {
    font-family: Cambria_m;
    src: url("fonts/Cambria_m.woff") format("woff");
  }
  </style>
  <!-- End embedded font definitions -->
  <!-- Begin shared CSS values -->
  <style class="shared-css" type="text/css">
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  .text-container {
    white-space: pre;
  }
  @supports (-webkit-touch-callout: none) {
    .text-container {
      white-space: normal;
    }
  }
  </style>
  <!-- End shared CSS values -->
  
  <!-- Begin inline CSS -->
  <style type="text/css">
  #t1_4 {
    left: 64px;
    bottom: 1202px;
    letter-spacing: 0.12px;
  }
  #t2_4 {
    left: 146px;
    bottom: 1202px;
  }
  #t3_4 {
    left: 330px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t4_4 {
    left: 586px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #t5_4 {
    left: 75px;
    bottom: 1181px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #t6_4 {
    left: 299px;
    bottom: 1181px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #t7_4 {
    left: 676px;
    bottom: 1181px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #t8_4 {
    left: 92px;
    bottom: 1159px;
  }
  #t9_4 {
    left: 92px;
    bottom: 1138px;
  }
  #ta_4 {
    left: 92px;
    bottom: 1117px;
  }
  #tb_4 {
    left: 92px;
    bottom: 1095px;
  }
  #tc_4 {
    left: 92px;
    bottom: 1074px;
  }
  #td_4 {
    left: 92px;
    bottom: 1053px;
  }
  #te_4 {
    left: 92px;
    bottom: 1031px;
  }
  #tf_4 {
    left: 92px;
    bottom: 1010px;
  }
  #tg_4 {
    left: 92px;
    bottom: 989px;
  }
  #th_4 {
    left: 171px;
    bottom: 967px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #ti_4 {
    left: 420px;
    bottom: 967px;
    letter-spacing: 0.12px;
  }
  #tj_4 {
    left: 581px;
    bottom: 967px;
    letter-spacing: 0.18px;
  }
  #tk_4 {
    left: 64px;
    bottom: 925px;
    letter-spacing: 0.12px;
  }
  #tl_4 {
    left: 146px;
    bottom: 925px;
    letter-spacing: -0.05px;
  }
  #tm_4 {
    left: 330px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #tn_4 {
    left: 586px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #to_4 {
    left: 75px;
    bottom: 904px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #tp_4 {
    left: 299px;
    bottom: 904px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #tq_4 {
    left: 676px;
    bottom: 904px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #tr_4 {
    left: 92px;
    bottom: 882px;
  }
  #ts_4 {
    left: 92px;
    bottom: 861px;
  }
  #tt_4 {
    left: 92px;
    bottom: 840px;
  }
  #tu_4 {
    left: 92px;
    bottom: 818px;
  }
  #tv_4 {
    left: 92px;
    bottom: 797px;
  }
  #tw_4 {
    left: 92px;
    bottom: 776px;
  }
  #tx_4 {
    left: 92px;
    bottom: 754px;
  }
  #ty_4 {
    left: 92px;
    bottom: 733px;
  }
  #tz_4 {
    left: 92px;
    bottom: 711px;
  }
  #t10_4 {
    left: 171px;
    bottom: 690px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #t11_4 {
    left: 420px;
    bottom: 690px;
    letter-spacing: 0.12px;
  }
  #t12_4 {
    left: 581px;
    bottom: 690px;
    letter-spacing: 0.18px;
  }
  #t13_4 {
    left: 325px;
    bottom: 425px;
    letter-spacing: 0.13px;
    word-spacing: -0.03px;
  }
  #t14_4 {
    left: 99px;
    bottom: 374px;
    letter-spacing: 0.13px;
  }
  #t15_4 {
    left: 200px;
    bottom: 374px;
    letter-spacing: 0.1px;
  }
  #t16_4 {
    left: 498px;
    bottom: 374px;
    letter-spacing: 0.14px;
  }
  #t17_4 {
    left: 70px;
    bottom: 629px;
    letter-spacing: 0.14px;
  }
  #t18_4 {
    left: 70px;
    bottom: 611px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t19_4 {
    left: 70px;
    bottom: 574px;
    letter-spacing: 0.13px;
    word-spacing: -0.02px;
  }
  #t1a_4 {
    left: 70px;
    bottom: 533px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1b_4 {
    left: 70px;
    bottom: 492px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
  }
  
  #sc51 {
    left: 150px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc52 {
    left: 150px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc53 {
    left: 150px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc54 {
    left: 150px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc55 {
    left: 150px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc56 {
    left: 150px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc57 {
    left: 150px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc58 {
    left: 150px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc59 {
    left: 150px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #grd51 {
    left: 625px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd52 {
    left: 625px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd53 {
    left: 625px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd54 {
    left: 625px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd55 {
    left: 625px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd56 {
    left: 625px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd57 {
    left: 625px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd58 {
    left: 625px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd59 {
    left: 625px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #tot5 {
    left: 300px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g5 {
    left: 460px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg5 {
    left: 625px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #sc61 {
    left: 150px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc62 {
    left: 150px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc63 {
    left: 150px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc64 {
    left: 150px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc65 {
    left: 150px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc66 {
    left: 150px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc67 {
    left: 150px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc68 {
    left: 150px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc69 {
    left: 150px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #tot6 {
    left: 300px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g6 {
    left: 460px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg6 {
    left: 625px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #grd61 {
    left: 625px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd62 {
    left: 625px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd63 {
    left: 625px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd64 {
    left: 625px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd65 {
    left: 625px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd66 {
    left: 625px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd67 {
    left: 625px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd68 {
    left: 625px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd69 {
    left: 625px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #wit {
    position: absolute;
    left: 375px;
    bottom: 620px;
    width: 400px;
    z-index: 3;
  }
  #acad {
    position: absolute;
    left: 375px;
    bottom: 570px;
    width: 400px;
    z-index: 3;
  }
  #club {
    position: absolute;
    left: 375px;
    bottom: 530px;
    width: 400px;
    z-index: 3;
  }
  #disp {
    position: absolute;
    left: 375px;
    bottom: 480px;
    width: 400px;
    z-index: 3;
  }
  
  #date1 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 345px;
    width: 80px;
  }
  #date2 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 305px;
    width: 80px;
  }
  #date3 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 265px;
    width: 80px;
  }
  #date4 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 230px;
    width: 80px;
  }
  #date5 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 195px;
    width: 80px;
  }
  #date6 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 160px;
    width: 80px;
  }
  
  #time1 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 345px;
    width: 80px;
  }
  #time2 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 305px;
    width: 80px;
  }
  #time3 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 265px;
    width: 80px;
  }
  #time4 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 230px;
    width: 80px;
  }
  #time5 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 195px;
    width: 80px;
  }
  #time6 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 160px;
    width: 80px;
  }
  
  #rnc1 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 345px;
    width: 400px;
  }
  #rnc2 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 305px;
    width: 400px;
  }
  #rnc3 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 265px;
    width: 400px;
  }
  #rnc4 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 230px;
    width: 400px;
  }
  #rnc5 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 195px;
    width: 400px;
  }
  #rnc6 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 160px;
    width: 400px;
  }
  
  .s1_4 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s2_4 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #000;
  }
  </style>
  <!-- End inline CSS -->
  
  <!-- Begin embedded font definitions -->
  <style id="fonts4" type="text/css">
  @font-face {
    font-family: Cambria-Bold_i;
    src: url("fonts/Cambria-Bold_i.woff") format("woff");
  }
  
  @font-face {
    font-family: Cambria_m;
    src: url("fonts/Cambria_m.woff") format("woff");
  }
  </style>
  <!-- End embedded font definitions -->
  <!-- Begin shared CSS values -->
  <style class="shared-css" type="text/css">
  .t {
    transform-origin: bottom left;
    z-index: 2;
    position: absolute;
    white-space: pre;
    overflow: visible;
    line-height: 1.5;
  }
  .text-container {
    white-space: pre;
  }
  @supports (-webkit-touch-callout: none) {
    .text-container {
      white-space: normal;
    }
  }
  </style>
  <!-- End shared CSS values -->
  
  <!-- Begin inline CSS -->
  <style type="text/css">
  #t1_4 {
    left: 64px;
    bottom: 1202px;
    letter-spacing: 0.12px;
  }
  #t2_4 {
    left: 146px;
    bottom: 1202px;
  }
  #t3_4 {
    left: 330px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t4_4 {
    left: 586px;
    bottom: 1202px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #t5_4 {
    left: 75px;
    bottom: 1181px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #t6_4 {
    left: 299px;
    bottom: 1181px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #t7_4 {
    left: 676px;
    bottom: 1181px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #t8_4 {
    left: 92px;
    bottom: 1159px;
  }
  #t9_4 {
    left: 92px;
    bottom: 1138px;
  }
  #ta_4 {
    left: 92px;
    bottom: 1117px;
  }
  #tb_4 {
    left: 92px;
    bottom: 1095px;
  }
  #tc_4 {
    left: 92px;
    bottom: 1074px;
  }
  #td_4 {
    left: 92px;
    bottom: 1053px;
  }
  #te_4 {
    left: 92px;
    bottom: 1031px;
  }
  #tf_4 {
    left: 92px;
    bottom: 1010px;
  }
  #tg_4 {
    left: 92px;
    bottom: 989px;
  }
  #th_4 {
    left: 171px;
    bottom: 967px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #ti_4 {
    left: 420px;
    bottom: 967px;
    letter-spacing: 0.12px;
  }
  #tj_4 {
    left: 581px;
    bottom: 967px;
    letter-spacing: 0.18px;
  }
  #tk_4 {
    left: 64px;
    bottom: 925px;
    letter-spacing: 0.12px;
  }
  #tl_4 {
    left: 146px;
    bottom: 925px;
    letter-spacing: -0.05px;
  }
  #tm_4 {
    left: 330px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #tn_4 {
    left: 586px;
    bottom: 925px;
    letter-spacing: 0.13px;
    word-spacing: -0.01px;
  }
  #to_4 {
    left: 75px;
    bottom: 904px;
    letter-spacing: 0.1px;
    word-spacing: -0.07px;
  }
  #tp_4 {
    left: 299px;
    bottom: 904px;
    letter-spacing: 0.13px;
    word-spacing: -0.06px;
  }
  #tq_4 {
    left: 676px;
    bottom: 904px;
    letter-spacing: 0.12px;
    word-spacing: 0.09px;
  }
  #tr_4 {
    left: 92px;
    bottom: 882px;
  }
  #ts_4 {
    left: 92px;
    bottom: 861px;
  }
  #tt_4 {
    left: 92px;
    bottom: 840px;
  }
  #tu_4 {
    left: 92px;
    bottom: 818px;
  }
  #tv_4 {
    left: 92px;
    bottom: 797px;
  }
  #tw_4 {
    left: 92px;
    bottom: 776px;
  }
  #tx_4 {
    left: 92px;
    bottom: 754px;
  }
  #ty_4 {
    left: 92px;
    bottom: 733px;
  }
  #tz_4 {
    left: 92px;
    bottom: 711px;
  }
  #t10_4 {
    left: 171px;
    bottom: 690px;
    letter-spacing: 0.14px;
    word-spacing: -0.03px;
  }
  #t11_4 {
    left: 420px;
    bottom: 690px;
    letter-spacing: 0.12px;
  }
  #t12_4 {
    left: 581px;
    bottom: 690px;
    letter-spacing: 0.18px;
  }
  #t13_4 {
    left: 325px;
    bottom: 425px;
    letter-spacing: 0.13px;
    word-spacing: -0.03px;
  }
  #t14_4 {
    left: 99px;
    bottom: 374px;
    letter-spacing: 0.13px;
  }
  #t15_4 {
    left: 200px;
    bottom: 374px;
    letter-spacing: 0.1px;
  }
  #t16_4 {
    left: 498px;
    bottom: 374px;
    letter-spacing: 0.14px;
  }
  #t17_4 {
    left: 70px;
    bottom: 629px;
    letter-spacing: 0.14px;
  }
  #t18_4 {
    left: 70px;
    bottom: 611px;
    letter-spacing: 0.13px;
    word-spacing: -0.07px;
  }
  #t19_4 {
    left: 70px;
    bottom: 574px;
    letter-spacing: 0.13px;
    word-spacing: -0.02px;
  }
  #t1a_4 {
    left: 70px;
    bottom: 533px;
    letter-spacing: 0.12px;
    word-spacing: -0.07px;
  }
  #t1b_4 {
    left: 70px;
    bottom: 492px;
    letter-spacing: 0.13px;
    word-spacing: -0.09px;
  }
  
  #sc51 {
    left: 150px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc52 {
    left: 150px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc53 {
    left: 150px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc54 {
    left: 150px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc55 {
    left: 150px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc56 {
    left: 150px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc57 {
    left: 150px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc58 {
    left: 150px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc59 {
    left: 150px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #grd51 {
    left: 625px;
    bottom: 1162px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd52 {
    left: 625px;
    bottom: 1141px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd53 {
    left: 625px;
    bottom: 1120px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd54 {
    left: 625px;
    bottom: 1099px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd55 {
    left: 625px;
    bottom: 1078px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd56 {
    left: 625px;
    bottom: 1056px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd57 {
    left: 625px;
    bottom: 1035px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd58 {
    left: 625px;
    bottom: 1014px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd59 {
    left: 625px;
    bottom: 993px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #tot5 {
    left: 300px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g5 {
    left: 460px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg5 {
    left: 625px;
    bottom: 970px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #sc61 {
    left: 150px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc62 {
    left: 150px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc63 {
    left: 150px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc64 {
    left: 150px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc65 {
    left: 150px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc66 {
    left: 150px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc67 {
    left: 150px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc68 {
    left: 150px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  #sc69 {
    left: 150px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 400px;
  }
  
  #tot6 {
    left: 300px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #g6 {
    left: 460px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 90px;
  }
  #cg6 {
    left: 625px;
    bottom: 693px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #grd61 {
    left: 625px;
    bottom: 885px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd62 {
    left: 625px;
    bottom: 864px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd63 {
    left: 625px;
    bottom: 843px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd64 {
    left: 625px;
    bottom: 822px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd65 {
    left: 625px;
    bottom: 801px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd66 {
    left: 625px;
    bottom: 779px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd67 {
    left: 625px;
    bottom: 758px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd68 {
    left: 625px;
    bottom: 737px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  #grd69 {
    left: 625px;
    bottom: 716px;
    z-index: 3;
    position: absolute;
    width: 180px;
  }
  
  #wit {
    position: absolute;
    left: 375px;
    bottom: 620px;
    width: 400px;
    z-index: 3;
  }
  #acad {
    position: absolute;
    left: 375px;
    bottom: 570px;
    width: 400px;
    z-index: 3;
  }
  #club {
    position: absolute;
    left: 375px;
    bottom: 530px;
    width: 400px;
    z-index: 3;
  }
  #disp {
    position: absolute;
    left: 375px;
    bottom: 480px;
    width: 400px;
    z-index: 3;
  }
  
  #date1 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 345px;
    width: 80px;
  }
  #date2 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 305px;
    width: 80px;
  }
  #date3 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 265px;
    width: 80px;
  }
  #date4 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 230px;
    width: 80px;
  }
  #date5 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 195px;
    width: 80px;
  }
  #date6 {
    position: absolute;
    z-index: 3;
    left: 70px;
    bottom: 160px;
    width: 80px;
  }
  
  #time1 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 345px;
    width: 80px;
  }
  #time2 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 305px;
    width: 80px;
  }
  #time3 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 265px;
    width: 80px;
  }
  #time4 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 230px;
    width: 80px;
  }
  #time5 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 195px;
    width: 80px;
  }
  #time6 {
    position: absolute;
    z-index: 3;
    left: 175px;
    bottom: 160px;
    width: 80px;
  }
  
  #rnc1 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 345px;
    width: 400px;
  }
  #rnc2 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 305px;
    width: 400px;
  }
  #rnc3 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 265px;
    width: 400px;
  }
  #rnc4 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 230px;
    width: 400px;
  }
  #rnc5 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 195px;
    width: 400px;
  }
  #rnc6 {
    position: absolute;
    z-index: 3;
    left: 300px;
    bottom: 160px;
    width: 400px;
  }
  
  .s1_4 {
    font-size: 15px;
    font-family: Cambria-Bold_i;
    color: #000;
  }
  .s2_4 {
    font-size: 15px;
    font-family: Cambria_m;
    color: #000;
  }
  </style>
  <!-- End inline CSS -->
  
  <!-- Begin embedded font definitions -->
  <style id="fonts4" type="text/css">
  @font-face {
    font-family: Cambria-Bold_i;
    src: url("fonts/Cambria-Bold_i.woff") format("woff");
  }
  
  @font-face {
    font-family: Cambria_m;
    src: url("fonts/Cambria_m.woff") format("woff");
  }
  
              .t {
                transform-origin: bottom left;
                z-index: 2;
                position: absolute;
                white-space: pre;
                overflow: visible;
                line-height: 1.5;
              }
              .text-container {
                white-space: pre;
              }
              @supports (-webkit-touch-callout: none) {
                .text-container {
                  white-space: normal;
                }
              }
            </style>
            <!-- End shared CSS values -->
  
            <!-- Begin inline CSS -->
            <style type="text/css">
              #t1_4 {
                left: 64px;
                bottom: 1202px;
                letter-spacing: 0.12px;
              }
              #t2_4 {
                left: 146px;
                bottom: 1202px;
              }
              #t3_4 {
                left: 330px;
                bottom: 1202px;
                letter-spacing: 0.13px;
                word-spacing: -0.07px;
              }
              #t4_4 {
                left: 586px;
                bottom: 1202px;
                letter-spacing: 0.13px;
                word-spacing: -0.01px;
              }
              #t5_4 {
                left: 75px;
                bottom: 1181px;
                letter-spacing: 0.1px;
                word-spacing: -0.07px;
              }
              #t6_4 {
                left: 299px;
                bottom: 1181px;
                letter-spacing: 0.13px;
                word-spacing: -0.06px;
              }
              #t7_4 {
                left: 676px;
                bottom: 1181px;
                letter-spacing: 0.12px;
                word-spacing: 0.09px;
              }
              #t8_4 {
                left: 92px;
                bottom: 1159px;
              }
              #t9_4 {
                left: 92px;
                bottom: 1138px;
              }
              #ta_4 {
                left: 92px;
                bottom: 1117px;
              }
              #tb_4 {
                left: 92px;
                bottom: 1095px;
              }
              #tc_4 {
                left: 92px;
                bottom: 1074px;
              }
              #td_4 {
                left: 92px;
                bottom: 1053px;
              }
              #te_4 {
                left: 92px;
                bottom: 1031px;
              }
              #tf_4 {
                left: 92px;
                bottom: 1010px;
              }
              #tg_4 {
                left: 92px;
                bottom: 989px;
              }
              #th_4 {
                left: 171px;
                bottom: 967px;
                letter-spacing: 0.14px;
                word-spacing: -0.03px;
              }
              #ti_4 {
                left: 420px;
                bottom: 967px;
                letter-spacing: 0.12px;
              }
              #tj_4 {
                left: 581px;
                bottom: 967px;
                letter-spacing: 0.18px;
              }
              #tk_4 {
                left: 64px;
                bottom: 925px;
                letter-spacing: 0.12px;
              }
              #tl_4 {
                left: 146px;
                bottom: 925px;
                letter-spacing: -0.05px;
              }
              #tm_4 {
                left: 330px;
                bottom: 925px;
                letter-spacing: 0.13px;
                word-spacing: -0.07px;
              }
              #tn_4 {
                left: 586px;
                bottom: 925px;
                letter-spacing: 0.13px;
                word-spacing: -0.01px;
              }
              #to_4 {
                left: 75px;
                bottom: 904px;
                letter-spacing: 0.1px;
                word-spacing: -0.07px;
              }
              #tp_4 {
                left: 299px;
                bottom: 904px;
                letter-spacing: 0.13px;
                word-spacing: -0.06px;
              }
              #tq_4 {
                left: 676px;
                bottom: 904px;
                letter-spacing: 0.12px;
                word-spacing: 0.09px;
              }
              #tr_4 {
                left: 92px;
                bottom: 882px;
              }
              #ts_4 {
                left: 92px;
                bottom: 861px;
              }
              #tt_4 {
                left: 92px;
                bottom: 840px;
              }
              #tu_4 {
                left: 92px;
                bottom: 818px;
              }
              #tv_4 {
                left: 92px;
                bottom: 797px;
              }
              #tw_4 {
                left: 92px;
                bottom: 776px;
              }
              #tx_4 {
                left: 92px;
                bottom: 754px;
              }
              #ty_4 {
                left: 92px;
                bottom: 733px;
              }
              #tz_4 {
                left: 92px;
                bottom: 711px;
              }
              #t10_4 {
                left: 171px;
                bottom: 690px;
                letter-spacing: 0.14px;
                word-spacing: -0.03px;
              }
              #t11_4 {
                left: 420px;
                bottom: 690px;
                letter-spacing: 0.12px;
              }
              #t12_4 {
                left: 581px;
                bottom: 690px;
                letter-spacing: 0.18px;
              }
              #t13_4 {
                left: 325px;
                bottom: 425px;
                letter-spacing: 0.13px;
                word-spacing: -0.03px;
              }
              #t14_4 {
                left: 99px;
                bottom: 374px;
                letter-spacing: 0.13px;
              }
              #t15_4 {
                left: 200px;
                bottom: 374px;
                letter-spacing: 0.1px;
              }
              #t16_4 {
                left: 498px;
                bottom: 374px;
                letter-spacing: 0.14px;
              }
              #t17_4 {
                left: 70px;
                bottom: 629px;
                letter-spacing: 0.14px;
              }
              #t18_4 {
                left: 70px;
                bottom: 611px;
                letter-spacing: 0.13px;
                word-spacing: -0.07px;
              }
              #t19_4 {
                left: 70px;
                bottom: 574px;
                letter-spacing: 0.13px;
                word-spacing: -0.02px;
              }
              #t1a_4 {
                left: 70px;
                bottom: 533px;
                letter-spacing: 0.12px;
                word-spacing: -0.07px;
              }
              #t1b_4 {
                left: 70px;
                bottom: 492px;
                letter-spacing: 0.13px;
                word-spacing: -0.09px;
              }
  
              #sc51 {
                left: 150px;
                bottom: 1162px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc52 {
                left: 150px;
                bottom: 1141px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc53 {
                left: 150px;
                bottom: 1120px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc54 {
                left: 150px;
                bottom: 1099px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc55 {
                left: 150px;
                bottom: 1078px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc56 {
                left: 150px;
                bottom: 1056px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc57 {
                left: 150px;
                bottom: 1035px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc58 {
                left: 150px;
                bottom: 1014px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc59 {
                left: 150px;
                bottom: 993px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
  
              #grd51 {
                left: 625px;
                bottom: 1162px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd52 {
                left: 625px;
                bottom: 1141px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd53 {
                left: 625px;
                bottom: 1120px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd54 {
                left: 625px;
                bottom: 1099px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd55 {
                left: 625px;
                bottom: 1078px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd56 {
                left: 625px;
                bottom: 1056px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd57 {
                left: 625px;
                bottom: 1035px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd58 {
                left: 625px;
                bottom: 1014px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd59 {
                left: 625px;
                bottom: 993px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
  
              #tot5 {
                left: 300px;
                bottom: 970px;
                z-index: 3;
                position: absolute;
                width: 90px;
              }
              #g5 {
                left: 460px;
                bottom: 970px;
                z-index: 3;
                position: absolute;
                width: 90px;
              }
              #cg5 {
                left: 625px;
                bottom: 970px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
  
              #sc61 {
                left: 150px;
                bottom: 885px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc62 {
                left: 150px;
                bottom: 864px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc63 {
                left: 150px;
                bottom: 843px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc64 {
                left: 150px;
                bottom: 822px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc65 {
                left: 150px;
                bottom: 801px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc66 {
                left: 150px;
                bottom: 779px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc67 {
                left: 150px;
                bottom: 758px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc68 {
                left: 150px;
                bottom: 737px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
              #sc69 {
                left: 150px;
                bottom: 716px;
                z-index: 3;
                position: absolute;
                width: 400px;
              }
  
              #tot6 {
                left: 300px;
                bottom: 693px;
                z-index: 3;
                position: absolute;
                width: 90px;
              }
              #g6 {
                left: 460px;
                bottom: 693px;
                z-index: 3;
                position: absolute;
                width: 90px;
              }
              #cg6 {
                left: 625px;
                bottom: 693px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
  
              #grd61 {
                left: 625px;
                bottom: 885px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd62 {
                left: 625px;
                bottom: 864px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd63 {
                left: 625px;
                bottom: 843px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd64 {
                left: 625px;
                bottom: 822px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd65 {
                left: 625px;
                bottom: 801px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd66 {
                left: 625px;
                bottom: 779px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd67 {
                left: 625px;
                bottom: 758px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd68 {
                left: 625px;
                bottom: 737px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
              #grd69 {
                left: 625px;
                bottom: 716px;
                z-index: 3;
                position: absolute;
                width: 180px;
              }
  
              #wit {
                position: absolute;
                left: 375px;
                bottom: 620px;
                width: 400px;
                z-index: 3;
              }
              #acad {
                position: absolute;
                left: 375px;
                bottom: 570px;
                width: 400px;
                z-index: 3;
              }
              #club {
                position: absolute;
                left: 375px;
                bottom: 530px;
                width: 400px;
                z-index: 3;
              }
              #disp {
                position: absolute;
                left: 375px;
                bottom: 480px;
                width: 400px;
                z-index: 3;
              }
  
              #date1 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 345px;
                width: 80px;
              }
              #date2 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 305px;
                width: 80px;
              }
              #date3 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 265px;
                width: 80px;
              }
              #date4 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 230px;
                width: 80px;
              }
              #date5 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 195px;
                width: 80px;
              }
              #date6 {
                position: absolute;
                z-index: 3;
                left: 70px;
                bottom: 160px;
                width: 80px;
              }
  
              #time1 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 345px;
                width: 80px;
              }
              #time2 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 305px;
                width: 80px;
              }
              #time3 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 265px;
                width: 80px;
              }
              #time4 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 230px;
                width: 80px;
              }
              #time5 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 195px;
                width: 80px;
              }
              #time6 {
                position: absolute;
                z-index: 3;
                left: 175px;
                bottom: 160px;
                width: 80px;
              }
  
              #rnc1 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 345px;
                width: 400px;
              }
              #rnc2 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 305px;
                width: 400px;
              }
              #rnc3 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 265px;
                width: 400px;
              }
              #rnc4 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 230px;
                width: 400px;
              }
              #rnc5 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 195px;
                width: 400px;
              }
              #rnc6 {
                position: absolute;
                z-index: 3;
                left: 300px;
                bottom: 160px;
                width: 400px;
              }
  
              .s1_4 {
                font-size: 15px;
                font-family: Cambria-Bold_i;
                color: #000;
              }
              .s2_4 {
                font-size: 15px;
                font-family: Cambria_m;
                color: #000;
              }
            </style>
            <!-- End inline CSS -->
  
            <!-- Begin embedded font definitions -->
            <style id="fonts4" type="text/css">
              @font-face {
                font-family: Cambria-Bold_i;
                src: url("fonts/Cambria-Bold_i.woff") format("woff");
              }
  
              @font-face {
                font-family: Cambria_m;
                src: url("fonts/Cambria_m.woff") format("woff");
              }
            </style>
            <!-- End embedded font definitions -->
  
            <!-- Begin shared CSS values -->
            <style class="shared-css" type="text/css">
              .t {
                transform-origin: bottom left;
                z-index: 2;
                position: absolute;
                white-space: pre;
                overflow: visible;
                line-height: 1.5;
              }
              .text-container {
                white-space: pre;
              }
              @supports (-webkit-touch-callout: none) {
                .text-container {
                  white-space: normal;
                }
              }
            </style>
            <!-- End shared CSS values -->
  
            <!-- Begin inline CSS -->
            <style type="text/css">
              #t1_6 {
                left: 357px;
                bottom: 1203px;
                letter-spacing: 0.15px;
                word-spacing: -0.09px;
              }
              #t2_6 {
                left: 72px;
                bottom: 1161px;
                letter-spacing: 0.1px;
              }
              #t3_6 {
                left: 135px;
                bottom: 1161px;
                letter-spacing: 0.13px;
                word-spacing: -0.06px;
              }
              #t4_6 {
                left: 365px;
                bottom: 1161px;
                letter-spacing: 0.14px;
                word-spacing: -0.08px;
              }
              #t5_6 {
                left: 620px;
                bottom: 1161px;
                letter-spacing: 0.12px;
              }
              #t6_6 {
                left: 716px;
                bottom: 1161px;
                letter-spacing: 0.12px;
                word-spacing: 0.09px;
              }
              #t7_6 {
                left: 70px;
                bottom: 618px;
                letter-spacing: 0.14px;
                word-spacing: -0.1px;
              }
              #t8_6 {
                left: 463px;
                bottom: 618px;
                letter-spacing: 0.13px;
                word-spacing: -0.05px;
              }
              #t9_6 {
                left: 55px;
                bottom: 146px;
                letter-spacing: 0.12px;
                word-spacing: -0.02px;
              }
              #ta_6 {
                left: 715px;
                bottom: 146px;
                letter-spacing: 0.12px;
                word-spacing: -0.09px;
              }
  
              .s1 {
                font-size: 15px;
                font-family: Cambria-Bold_i;
                color: #000;
              }
  
              #srl1 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 1107px;
                z-index: 3;
              }
              #srl2 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 1061px;
                z-index: 3;
              }
              #srl3 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 1015px;
                z-index: 3;
              }
              #srl4 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 969px;
                z-index: 3;
              }
              #srl5 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 923px;
                z-index: 3;
              }
              #srl6 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 877px;
                z-index: 3;
              }
              #srl7 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 831px;
                z-index: 3;
              }
              #srl8 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 785px;
                z-index: 3;
              }
              #srl9 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 739px;
                z-index: 3;
              }
              #srl10 {
                left: 72px;
                position: absolute;
                width: 40px;
                bottom: 693px;
                z-index: 3;
              }
  
              #snc1 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 1107px;
                z-index: 3;
              }
              #snc2 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 1061px;
                z-index: 3;
              }
              #snc3 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 1015px;
                z-index: 3;
              }
              #snc4 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 969px;
                z-index: 3;
              }
              #snc5 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 923px;
                z-index: 3;
              }
              #snc6 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 877px;
                z-index: 3;
              }
              #snc7 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 831px;
                z-index: 3;
              }
              #snc8 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 785px;
                z-index: 3;
              }
              #snc9 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 739px;
                z-index: 3;
              }
              #snc10 {
                left: 135px;
                position: absolute;
                width: 200px;
                bottom: 693px;
                z-index: 3;
              }
  
              #mny1 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 1107px;
                z-index: 3;
              }
              #mny2 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 1061px;
                z-index: 3;
              }
              #mny3 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 1015px;
                z-index: 3;
              }
              #mny4 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 969px;
                z-index: 3;
              }
              #mny5 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 923px;
                z-index: 3;
              }
              #mny6 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 877px;
                z-index: 3;
              }
              #mny7 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 831px;
                z-index: 3;
              }
              #mny8 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 785px;
                z-index: 3;
              }
              #mny9 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 739px;
                z-index: 3;
              }
              #mny10 {
                left: 370px;
                position: absolute;
                width: 200px;
                bottom: 693px;
                z-index: 3;
              }
  
              #crd1 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 1107px;
                z-index: 3;
              }
              #crd2 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 1061px;
                z-index: 3;
              }
              #crd3 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 1015px;
                z-index: 3;
              }
              #crd4 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 969px;
                z-index: 3;
              }
              #crd5 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 923px;
                z-index: 3;
              }
              #crd6 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 877px;
                z-index: 3;
              }
              #crd7 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 831px;
                z-index: 3;
              }
              #crd8 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 785px;
                z-index: 3;
              }
              #crd9 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 739px;
                z-index: 3;
              }
              #crd10 {
                left: 620px;
                position: absolute;
                width: 60px;
                bottom: 693px;
                z-index: 3;
              }
  
              #grd1 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 1107px;
                z-index: 3;
              }
              #grd2 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 1061px;
                z-index: 3;
              }
              #grd3 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 1015px;
                z-index: 3;
              }
              #grd4 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 969px;
                z-index: 3;
              }
              #grd5 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 923px;
                z-index: 3;
              }
              #grd6 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 877px;
                z-index: 3;
              }
              #grd7 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 831px;
                z-index: 3;
              }
              #grd8 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 785px;
                z-index: 3;
              }
              #grd9 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 739px;
                z-index: 3;
              }
              #grd10 {
                left: 720px;
                position: absolute;
                width: 60px;
                bottom: 693px;
                z-index: 3;
              }
  
              #highers {
                left: 70px;
                bottom: 303px;
                width: 370px;
                height: 290px;
                position: absolute;
                z-index: 3;
              }
              #comment {
                left: 460px;
                bottom: 303px;
                width: 370px;
                height: 290px;
                position: absolute;
                z-index: 3;
              }
  
              @font-face {
                font-family: Cambria-Bold_i;
                src: url("fonts/Cambria-Bold_i.woff") format("woff");
              }
            </style>
            <!-- End embedded font definitions -->
  
  