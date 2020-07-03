import React, { Component } from 'react';
import { URL_IMAGE, IMAGE_BASE_URL, BACKDROP_SIZE, API_KEY, VIDEO_LINK } from "../../apiKeys";
import FontAwesome from "react-fontawesome";
import "./DetailMovieCard.css";
import { Button } from 'react-bootstrap';
import ModalVideo from "react-modal-video";
import axios from 'axios';
import Modal from '../Modal';
import Grid from '@material-ui/core/Grid';
import { calcTime, convertMoney } from "../../helper";
import Navigation from '../Navigation';
import Spinner from '../../elements/Spinner/Spinner';


class DetailMovieCard extends Component {
	state = {
		loading: false,
	};
	componentDidMount() {
		this.setState({ loading: true });

	}
	render() {
		const {
			poster_path,
			original_title,
			vote_average,
			vote_count,
			tagline,
			overview,
			release_date,
			budget,
			revenue,
			runtime,
			backdrop_path,
			adult,
			title,
			status,
			id,
			genres
		} = this.props.movie;

		// let modalID;
		// if (typeof this.props.movie.id !== "undefined") {
		// 	modalID = <Modal modal={this.props.movie.id} />
		// }
		// else {
		// 	modalID = <div>Loading !!! </div>

		// }

		return (
			<React.Fragment>
				<Navigation movie={original_title} />
				<Grid container>
					<Grid container className="movieinfo" xs={12} lg={12} md={12}
						style={{ background: backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}')` : "#000" }}
					>
						<Grid container className="movieinfocontent" xs={12} lg={12} md={12}>
							<Grid item xs={12} md={5} lg={4} className="movieinfothumb">
								<img src={poster_path === 'undefined' ? "Loading" : (URL_IMAGE + poster_path)} />
							</Grid>
							<Grid item xs={12} md={7} lg={8} className="movieinfo-text " >
								<h1>{title}&nbsp;<span>({status})</span></h1>
								{tagline === "" ? "" : <p><FontAwesome className="fa-revenue" name="tags" size="2x" /> ({tagline}) </p>}
								<h3><FontAwesome className="fa-revenue" name="calendar" size="2x" /> Release date</h3>
								<p>{release_date}</p>
								<h3><FontAwesome className="fa-revenue" name="cloud" size="2x" /> Overview</h3>
								<p>{overview}</p>
								<h3><FontAwesome className="fa-revenue" name="star" size="2x" /> IMDB RATING</h3>
								<div className="rmdb-rating">
									<meter
										min="0"
										max="100"
										optimum="100"
										low="40"
										high="70"
										value={vote_average * 10}
									/>
									<p className="rmdb-score">{vote_average}</p>
								</div>
								<div>
									<h3><FontAwesome className="fa-time" name="clock-o" size="2x" /> Running Time</h3>
									<p>{calcTime(runtime)}</p>
								</div>

								<div>
									<h3><FontAwesome className="fa-budget" name="money" size="2x" /> Budget</h3>
									{budget === 0 ? "Not Avaliable" : <p>{convertMoney(budget)}</p>}
								</div>
								<div>
									<h3><FontAwesome className="fa-revenue" name="ticket" size="2x" /> Revenue</h3>
									{budget === 0 ? "Not Avaliable" : <p>{convertMoney(revenue)}</p>}
								</div>


								{/* {modalID} */}
								<Button variant="outlined" className="btnTrailer" ><FontAwesome className="fa-play" />&nbsp; Play Trailer</Button>
							</Grid>
							<FontAwesome className="fa-film" name="film" size="4x" />
						</Grid>
					</Grid>
				</Grid>
				{/* {this.state.loading ? <Spinner /> : null} */}

			</React.Fragment>



		);
	}
}

export default DetailMovieCard;