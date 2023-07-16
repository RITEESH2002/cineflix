# CINEFLIX;)
import React, {useEffect, useState} from 'react';
import {GiProcessor} from "react-icons/gi";
import {BsBack, BsBank, BsMemory} from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useStateContext} from "../context/ContextProvider";
import AMRService from "../services/AMRService";
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import AllTables from "./STPResponse2";
import AllDOCSAndDOCLevel from "./AllDOCSAndDOCLevel";
import LinkedAccounts from "./LinkedAccounts";
import ChangesToMiscFields from "./ChangesToMiscFields";
import ChangesToAddress from "./ChangesToAddress";
import STPResponse from "./STPResponse";
import ChangesToSchServices from "./ChangesToSchServices";
import {BiArrowBack} from "react-icons/bi";
import DocToWorkflow from "./DocToWorkflow";
import WorkflowList from "./WorkflowList";
import WorkflowToDocmap from "./WorkflowToDocmap";


//https://mdbootstrap.com/support/react/mdbtable-font-size/
const DocOverview = () => {

  const [loading, setLoading] = useState(true);


  const {docCode} = useParams();
  const { selectedWorkflow, docConfig, setDocConfig ,docToWorkflow , setDocToWorkflow , newDocCode ,setNewDocCode,
    // docToWorkflowAndConfig, setDocToWorkflowAndConfig,
    workflowList, setWorkflowList, workflowToDocmap, setWorkflowToDocmap} = useStateContext();
  // let { mergedWorkflowAndConfig } = useStateContext();

  const DOC_TO_WORKFLOW= `http://localhost:8080/get-doc-to-workflow/${docCode}`;
  const DOC_CONFIG= `http://localhost:8080/get-doc-config/${docCode}`;
  const WORKFLOW_LIST= "http://localhost:8080/get-workflow-list";
  const WORKFLOW_TO_DOCMAP= `http://localhost:8080/get-workflow-to-docmap/${selectedWorkflow}`;



  useEffect(()=>{
    const getDocToWorkflow = async () => {
      // setLoading(true);
      try{
        const response = await axios.get(DOC_TO_WORKFLOW);
        // const response2 = await axios.get(DOC_CONFIG);
        setDocToWorkflow(response.data);
        // setDocConfig(response2.data);
        console.log(typeof docToWorkflow);
        console.log("First ", docToWorkflow);
        // console.log(typeof docConfig);
        // console.log("Second ", docConfig);
        // mergedWorkflowAndConfig = docToWorkflow.map(item=>{
        //   const matchingDocConfig = docConfig.find(config=>config.br_CD === item.entity);
        //   return {...item, ...matchingDocConfig};
        // })
        // setDocToWorkflowAndConfig(mergedWorkflowAndConfig);
        // console.log(mergedWorkflowAndConfig);
        // console.log("Doc To workflow and config data",docToWorkflowAndConfig);
      } catch(error) {
        console.log(error);
      }
      // setLoading(false);
    };
    getDocToWorkflow();

    const getDocToConfig = async () => {
      // setLoading(true);
      try{
        const response = await axios.get(DOC_CONFIG);

        setDocConfig(response.data);

        console.log("Doc Config", docConfig);

      } catch(error) {
        console.log(error);
      }
      // setLoading(false);
    };
    getDocToConfig();

    const getWorkflowListfn = async () => {
      // setLoading(true);
      try{
        const response = await axios.get(WORKFLOW_LIST);

        setWorkflowList(response.data);

        console.log("workflowlist", workflowList);

      } catch(error) {
        console.log(error);
      }
      // setLoading(false);
    };
    getWorkflowListfn();

    },[docCode]);

  // const WORKFLOW_TO_DOCMAP= `http://localhost:8080/get-workflow-to-docmap/${selectedWorkflow}`;
  useEffect(()=>{


      console.log("WORKFLOW SELECTED", selectedWorkflow);

    const getWorkflowTodDocmapfn = async () => {
      // setLoading(true);
      try{
        const response = await axios.get(WORKFLOW_TO_DOCMAP);

        setWorkflowToDocmap(response.data);

        console.log("workflowToDocMap", workflowToDocmap);

      } catch(error) {
        console.log(error);
      }
      // setLoading(false);
    };
    getWorkflowTodDocmapfn();

  },[selectedWorkflow]);
  //
  // useEffect(()=>{
  //   const getWorkflowTodDocmapfn = async () => {
  //     // setLoading(true);
  //     try{
  //       const response = await axios.get(WORKFLOW_TO_DOCMAP);
  //
  //       setWorkflowToDocmap(response.data);
  //
  //       console.log("workflowToDocMap", workflowToDocmap);
  //
  //     } catch(error) {
  //       console.log(error);
  //     }
  //     // setLoading(false);
  //   };
  //   getWorkflowTodDocmapfn();
  //
  // },[selectedWorkflow])

  const navigate = useNavigate();

  const handleClick = (e) =>{
    e.preventDefault();

    setNewDocCode(newDocCode);
    console.log("On submit" , typeof(newDocCode));
    // setTicketNumber(0);

    navigate(`/Dashboard/DocOverview/${newDocCode}`)
    setNewDocCode(0);
  }

  const handleNewDocChange = (event) => {
    console.log(typeof parseInt(event.target.value));
    setNewDocCode(parseInt(event.target.value));
  }
  return (
    <>
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full bg-blue-400">
        <Navbar />
      </div>

      <div className="mt-14 justify-content-center flex align-items-center">

        <span className="gap-1 mt-1 mr-4 text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">Enter A New DOC Number :</span>
        <form className="flex "
              onSubmit={handleClick}
        >
          <input
            type="text"
            className="rounded border-gray-400 border-1 p-2 font-extrabold text-black w-80 mr-3"
            inputMode="numeric"
            value={newDocCode !== 0 ? newDocCode : ''}
            onChange={handleNewDocChange}
            placeholder="Doc Number"
          />

          <button className="h-full p-1 w-28 mt-0.5 rounded-xl border-none bg-success font-extrabold text-xl cursor-pointer font-black">
            Submit
          </button>
        </form>

      </div>


      <div className="p-1.5 m-1.5 mt-14 mb-14">
        <DocToWorkflow />
      </div>

      <div className="p-1.5 m-1.5 mt-14 ">
        <WorkflowList />
      </div>

      <div className="p-1.5 m-1.5  mb-14">
        <WorkflowToDocmap />
      </div>


    </>
  )
}

export default DocOverview;



import React, {useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useStateContext} from "../context/ContextProvider";
import Title from "../components/Title/Title";
import './Color.css'

const DocToWorkflow = () => {

  const {docConfig, setDocConfig ,activeMenu, ticketNumber, setAllDocsAndDocLevel, allDocsAndDocLevel, docCode, setDocCode, docToWorkflow, setDocToWorkflow} = useStateContext();
  // let {mergedWorkflowAndConfig} = useStateContext();

  let mergedWorkflowAndConfig = [] ;

  const [docToWorkflowAndConfig, setDocToWorkflowAndConfig] = useState([{
    doc_CD: '',
    entity: '',
    region: '',
    req_TYP_NM: '',
    orig_VRFY_FL:'',
    skip_WATRMRK_FL:'',
    skip_CHECKER_FL:'',
    br_CD: '',
    in_DTS_IND: '',
    doc_LVL_IN: '',
  }])

  mergedWorkflowAndConfig = docToWorkflow.map(item=>{
    const matchingDocConfig = docConfig.find(config=>config.br_CD === item.entity);
    return {...item, ...matchingDocConfig};
  })
  setDocToWorkflowAndConfig(mergedWorkflowAndConfig);

  let tableContent ;

  if(docToWorkflowAndConfig.length === 0){
    tableContent = <div className="text-gray-500 font-extrabold text-xl">NO DATA AVAILABLE HERE</div>
  }
  else {

    const data = {
      columns: [
        {
          label: 'DOC_CD',
          field: 'DOC_CD',
          sort: 'asc',
          width: 80
        },
        {
          label: 'ENTITY',
          field: 'ENTITY',
          sort: 'asc',
          width: 80
        },
        {
          label: 'REGION',
          field: 'REGION',
          sort: 'asc',
          width: 50
        },
        {
          label: 'REQ_TYP_NM',
          field: 'REQ_TYP_NM',
          sort: 'asc',
          width: 140
        },
        {
          label: 'ORIG_VRFY_FL',
          field: 'ORIG_VRFY_FL',
          sort: 'asc',
          width: 60
        },
        {
          label: 'SKIP_WATRMRK_FL',
          field: 'SKIP_WATRMRK_FL',
          sort: 'asc',
          width: 60
        },
        {
          label: 'SKIP_CHECKER_FL',
          field: 'SKIP_CHECKER_FL',
          sort: 'asc',
          width: 60
        },
        {
          label: 'BR_CD',
          field: 'BR_CD',
          sort: 'asc',
          width: 60
        },
        {
          label: 'IN_DTS_IND',
          field: 'IN_DTS_IND',
          sort: 'asc',
          width: 60
        },
        {
          label: 'DOC_LVL_IN',
          field: 'DOC_LVL_IN',
          sort: 'asc',
          width: 60
        },
      ],
      rows:docToWorkflowAndConfig && Array.isArray(docToWorkflowAndConfig)
        ? docToWorkflowAndConfig.map(
          item => (
            {
              "DOC_CD": item.doc_CD,
              "ENTITY": item.entity,
              "REGION": item.region,
              "REQ_TYP_NM": item.req_TYP_NM,
              "ORIG_VRFY_FL": item.orig_VRFY_FL,
              "SKIP_WATRMRK_FL": item.skip_WATRMRK_FL,
              "SKIP_CHECKER_FL": item.skip_CHECKER_FL,
              "BR_CD": item.br_CD,
              "IN_DTS_IND": item.in_DTS_IND,
              "DOC_LVL_IN": item.doc_LVL_IN
            })) : []
    };
    tableContent = <MDBDataTable
      striped
      entriesOptions={[5,10,15,20]}
      entries={5}
      bordered={true}
      hover
      data={data}
      noBottomColumns={true}
      className='your-custom-styles'
    />
    //   console.log(data.columns, data.rows)
    // console.log("data", data)
  }
  return (
    <>
      <div className="ml-4 mr-4 justify-center  p-2  bg-blue-200 rounded-3xl" id="jumpAllDOCSAndDOCLevel">
        <div className="m-2 p-4  bg-blue-50 rounded-3xl">
          <Title title="DOC TO WORKFLOW" />
          <hr className="border-bottom mb-4"/>
          {tableContent}
        </div>
      </div>
    </>
  );
}

export default DocToWorkflow;
