import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';